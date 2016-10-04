from rest_framework import serializers
from discussion.models import Thread
from profiles.serializers import ProfileSerializer

import calendar
from rest_framework_recursive.fields import RecursiveField
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _


class TimestampField(serializers.ReadOnlyField):
    def to_representation(self, value):
        return calendar.timegm(value.timetuple())


class ThreadSerializer(serializers.ModelSerializer):
    date = TimestampField()
    last_edit = TimestampField()
    children = serializers.ListField(child=RecursiveField(), read_only=True)
    author = ProfileSerializer(read_only=True)
    seen_by = serializers.StringRelatedField(many=True, read_only=True)

    def validate(self, data):
        # a comment must belong at the same band as its parent
        if data.get('parent'):
            if data.get('parent').dashboard != data.get('dashboard'):
                data['dashboard'] = data.get('parent').dashboard

        # users can post only at their bands
        if data.get('dashboard') not in self.context.get('request').user.band_set.all():
            raise ValidationError(_('You are not a member of this band.'))

        data['author'] = self.context.get('request').user
        return data

    class Meta:
        model = Thread
        fields = (
            'id',
            'text',
            'date',
            'last_edit',
            'children',
            'parent',
            'author',
            'dashboard',
            'seen_by',
        )

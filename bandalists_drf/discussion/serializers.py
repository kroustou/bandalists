from rest_framework import serializers
from discussion.models import Thread
from django.contrib.auth.models import User

import calendar


class TimestampField(serializers.ReadOnlyField):
    def to_representation(self, value):
        return calendar.timegm(value.timetuple())


class ChildSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())
    date = TimestampField()
    last_edit = TimestampField()

    class Meta:
        model = Thread
        fields = (
            'pk',
            'text',
            'date',
            'last_edit',
            'parent',
            'author',
            'dashboard',
        )


class ThreadSerializer(serializers.ModelSerializer):
    children = ChildSerializer(many=True, read_only=True)
    date = TimestampField()
    last_edit = TimestampField()

    class Meta:
        model = Thread
        fields = (
            'pk',
            'text',
            'date',
            'last_edit',
            'children',
            'parent',
            'author',
            'dashboard',
            'seen_by',
        )

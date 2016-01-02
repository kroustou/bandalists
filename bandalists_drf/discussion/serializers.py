from rest_framework import serializers
from discussion.models import Thread
import calendar
from rest_framework_recursive.fields import RecursiveField


class TimestampField(serializers.ReadOnlyField):
    def to_representation(self, value):
        return calendar.timegm(value.timetuple())


class ThreadSerializer(serializers.HyperlinkedModelSerializer):
    date = TimestampField()
    last_edit = TimestampField()
    seen_by = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='api:user-detail'
    )
    author = serializers.HyperlinkedIdentityField(view_name='api:user-detail')
    dashboard = serializers.HyperlinkedIdentityField(view_name='api:band-detail')
    children = serializers.ListField(child=RecursiveField())
    parent = serializers.HyperlinkedIdentityField(view_name='api:thread-detail')

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

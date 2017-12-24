from rest_framework import serializers
from .models import Notification


class NotificationSerializer(serializers.ModelSerializer):
    for_user = serializers.PrimaryKeyRelatedField(read_only=True)
    notification_type = serializers.PrimaryKeyRelatedField(read_only=True)
    message = serializers.PrimaryKeyRelatedField(read_only=True)
    url = serializers.PrimaryKeyRelatedField(read_only=True)
    dashboard = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Notification
        fields = (
            'id',
            'read',
            'for_user',
            'notification_type',
            'message',
            'url',
            'dashboard'
        )

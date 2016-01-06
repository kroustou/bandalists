from rest_framework import serializers
from .models import Notification


class NotificationSerializer(serializers.ModelSerializer):
    for_user = serializers.PrimaryKeyRelatedField(read_only=True)
    url = serializers.PrimaryKeyRelatedField(read_only=True)
    message = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Notification

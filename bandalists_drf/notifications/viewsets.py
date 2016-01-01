from rest_framework import viewsets
from .serializers import NotificationSerializer


class NotificationsViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return self.request.user.notification_set.all()

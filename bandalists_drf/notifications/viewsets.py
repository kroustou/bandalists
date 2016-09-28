from rest_framework import viewsets, mixins
from .serializers import NotificationSerializer


class NotificationsViewSet(
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    mixins.ListModelMixin,
    viewsets.GenericViewSet
):
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return self.request.user.notification_set.filter(dashboard__in=self.request.user.band_set.all())

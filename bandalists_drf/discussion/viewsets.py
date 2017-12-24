from copy import deepcopy
from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import Thread
from .serializers import ThreadSerializer
from .filters import DashboardFilter

from notifications.models import Notification


class ThreadViewSet(viewsets.ModelViewSet):
    serializer_class = ThreadSerializer
    filter_class = DashboardFilter

    def destroy(self, request, pk=None):
        queryset = Thread.objects.filter(dashboard__in=[
                band for band in self.request.user.band_set.all()
            ],
            pk=pk,
            author=request.user
        )
        if len(queryset):
            queryset.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get_queryset(self):
        # get all root threads for a users band
        threads = Thread.objects.filter(
            dashboard__in=[
                band for band in self.request.user.band_set.all()
            ], parent__isnull=True
        ).order_by('-date')
        for thread in threads.exclude(
            author=self.request.user
        ).exclude(
            seen_by=self.request.user
        ):
            thread.seen_by.add(self.request.user)
            thread.save()
        return threads

    def create(self, request):
        user = request.user
        if request.data.get('parent'):
            # its a reply, that means any notifications about its parent
            # have been seen
            Notification.objects.filter(
                message=Thread.objects.get(
                    pk=request.data.get('parent')
                ).get_notification_message()
            ).update(read=True)
        return super(ThreadViewSet, self).create(request)

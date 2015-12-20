from rest_framework import viewsets
from rest_framework.exceptions import PermissionDenied

from discussion.models import Thread
from discussion.serializers import ThreadSerializer

from notifications.models import Notification


class ThreadViewSet(viewsets.ModelViewSet):
    serializer_class = ThreadSerializer

    def get_queryset(self):
        threads = Thread.objects.filter(
            dashboard__in=[
                band for band in self.request.user.band_set.all()
            ],
            parent__isnull=True
        )
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
        # try to see if user allowed to post to dashboard
        if request.data.get('dashboard') in [str(band.pk) for band in user.band_set.all()]:
            request.data.update(
                {
                    'seen_by': user.pk,
                }
            )
            if request.data.get('parent'):
                # its a reply, that means any notifications about its parent
                # have been seen
                Notification.objects.filter(
                    message=Thread.objects.get(
                        pk=request.data.get('parent')
                    ).get_notification_message()
                ).update(read=True)
            return super(ThreadViewSet, self).create(request)
        else:
            raise PermissionDenied

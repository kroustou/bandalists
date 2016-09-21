import json
from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL

from django.db.models.signals import post_save
from django.dispatch import receiver
from .utils import push_notification
from bands.models import Band
import receivers

class Notification(models.Model):
    for_user = models.ForeignKey(User)
    notification_type = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    message = models.TextField()
    read = models.BooleanField(default=False)
    dashboard = models.ForeignKey(Band, null=True, blank=True)

    def to_json(self):
        from .serializers import NotificationSerializer
        serializer = NotificationSerializer(self)
        return json.dumps(
            serializer.data
        )

    @property
    def channel(self):
        try:
            return self.for_user.auth_token.key
        except:
            # the user has no key, thus has not ever logged in
            return False


    def __unicode__(self):
        return '%s: %s' % (self.for_user, self.message)

    class Meta:
        ordering = ['-id']


@receiver(post_save, sender=Notification)
def send_notification(sender, instance, signal, created, **kwargs):
    if created:
        push_notification(instance.channel, instance.to_json())

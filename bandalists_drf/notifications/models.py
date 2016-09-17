import json
from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL

from django.db.models.signals import post_save
from django.dispatch import receiver
from .utils import push_notification
from bands.models import Band
# import signal receivers in order to be activated
from notifications import receivers


class Notification(models.Model):
    for_user = models.ForeignKey(User)
    notification_type = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    message = models.TextField()
    read = models.BooleanField(default=False)
    dashboard = models.ForeignKey(Band, null=True, blank=True)

    def to_json(self):
        return json.dumps(
            {
                'type': 'notification',
                'message': json.loads(self.message)
            }
        )

    @property
    def channel(self):
        return 'notifications-%s' % self.for_user.pk

    def __unicode__(self):
        return '%s: %s' % (self.for_user, self.message)


@receiver(post_save, sender=Notification)
def send_notification(sender, instance, signal, created, **kwargs):
    if created:
        push_notification(instance.channel, instance.to_json())

import json
from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from .utils import push_notification
from profiles.emails import send_notification_email
from bands.models import Band

# import in order to register extra recievers
import receivers  # noqa


User = settings.AUTH_USER_MODEL


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

    def notify_email(self):
        # if user has email (and later if user has
        # enabled notifications via email)
        if self.for_user.email:
            send_notification_email(self)

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
        instance.notify_email()
        push_notification(instance.channel, instance.to_json())

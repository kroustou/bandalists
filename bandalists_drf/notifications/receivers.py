from channels import Group
import json

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from discussion.models import Thread
from discussion.serializers import ThreadSerializer
from bands.models import Band


@receiver(post_save, sender=Thread)
def create_notification(sender, instance, signal, created, **kwargs):
    # avoid circular imports
    from .models import Notification
    if created:
        for user in instance.dashboard.members.exclude(pk=instance.author.pk):
            message = ThreadSerializer(instance).data
            Notification(
                for_user=user,
                url=instance.get_absolute_url(),
                notification_type='thread',
                message=json.dumps(message),
                dashboard=instance.dashboard,
            ).save()


@receiver(post_save, sender=Thread)
def mark_notification_read(sender, instance, signal, created, **kwargs):
    # if there are pending notifications for the user
    # about this thread, we have to mark them as read.
    from .models import Notification
    for notification in Notification.objects.filter(for_user=instance.author, notification_type='thread'):
        message = json.loads(notification.message)
        if message.get('parent') == instance.parent.pk if instance.parent else instance.pk:
            notification.read = True
            notification.save()


@receiver(post_delete, sender=Thread)
def notify(sender, instance, signal, **kwargs):
    Group(instance.dashboard.slug).send({"text": json.dumps({'notification_type': 'thread', 'dashboard': instance.dashboard.id})})

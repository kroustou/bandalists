from channels import Group
import json

from django.db.models.signals import post_save, post_delete, m2m_changed
from django.dispatch import receiver

from discussion.models import Thread
from discussion.serializers import ThreadSerializer
from bands.models import Band, BandImage


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
    pk = instance.parent.pk if instance.parent else instance.pk
    for notification in Notification.objects.filter(
        for_user=instance.author,
        notification_type='thread',
        read=False
    ):
        message = json.loads(notification.message)
        if (message.get('parent') == pk) or (message.get('id') == pk):
            notification.read = True
            notification.save()


@receiver(post_delete, sender=Thread)
def notify(sender, instance, signal, **kwargs):
    Group(instance.dashboard.slug).send({"text": json.dumps({'notification_type': 'thread', 'dashboard': instance.dashboard.id})})

def print_band(sender, instance, action, reverse, model, pk_set, **kwargs):
    from .models import Notification
    users = [u.username for u in model.objects.filter(pk__in=pk_set)]
    message = False
    if action == 'post_add':
        message = '%s has been added to %s.' % (', '.join(users), instance.name)
    elif action == 'post_remove':
        message = '%s has left %s.' % (', '.join(users), instance.name)
    if message:
        for user in instance.members.all():
            Notification(
                for_user=user,
                url='/deleteme/',
                notification_type='update_bands',
                message=json.dumps({'message': message}),
                dashboard=instance,
            ).save()
m2m_changed.connect(print_band, sender=Band.members.through)

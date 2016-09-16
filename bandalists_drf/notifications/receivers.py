import json

from django.db.models.signals import post_save
from django.dispatch import receiver

from discussion.models import Thread
from discussion.serializers import ThreadSerializer


@receiver(post_save, sender=Thread)
def create_notification(sender, instance, signal, created, **kwargs):
    # avoid circular imports
    from .models import Notification
    if created:
        for user in instance.dashboard.members.exclude(pk=instance.author.pk):
            message = ThreadSerializer(instance).data
            Notification(
                for_user=user,
                type='thread',
                message=json.dumps(message),
            ).save()

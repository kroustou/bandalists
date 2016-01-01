import json

from django.db.models.signals import post_save
from django.dispatch import receiver

from discussion.models import Thread
from .models import Notification


@receiver(post_save, sender=Thread)
def create_notification(sender, instance, signal, created, **kwargs):
    if created:
        # avoid circular imports
        from discussion.serializers import ThreadSerializer
        for user in instance.dashboard.band.members.exclude(pk=instance.author.pk):
            message = ThreadSerializer(instance).data
            Notification(
                for_user=user,
                url=instance.url,
                message=json.dumps(message),
            ).save()

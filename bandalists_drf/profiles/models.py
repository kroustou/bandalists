from __future__ import unicode_literals
import uuid
from rest_framework.authtoken.models import Token

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from bands.models import Band
from .emails import send_invitation_email


class Profile(models.Model):
    user = models.OneToOneField(User)
    avatar = models.ImageField(upload_to='avatars', null=True, blank=True)

    def to_dict(self):
        from bands.serializers import BandSerializer
        return ({
            'username': self.user.username,
            'name': self.user.first_name,
            'email': self.user.email,
            'surname': self.user.last_name,
            'avatar': self.avatar.url if self.avatar else None,
            'instruments': [
                instrument.name
                for instrument in self.user.instrument_set.all()
            ],
            'bands': [
                BandSerializer(band).data for band in self.user.band_set.all()
            ]
        })

    def __unicode__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_profile(sender, instance, signal, created, **kwargs):
    if created:
        # create profile and Token
        Profile(user=instance).save()
        Token.objects.create(user=instance)


class Invitation(models.Model):
    invited_by = models.ForeignKey(User)
    email = models.EmailField(max_length=255)
    band = models.ForeignKey(Band)
    token = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)


@receiver(post_save, sender=Invitation)
def invite_user(sender, instance, signal, created, **kwargs):
    if created:
        send_invitation_email(instance)

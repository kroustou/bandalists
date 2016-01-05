from __future__ import unicode_literals

from rest_framework.authtoken.models import Token

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse


class Profile(models.Model):
    user = models.OneToOneField(User)
    avatar = models.ImageField(upload_to='avatars', null=True, blank=True)

    def to_dict(self, uri):
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
                uri(reverse(
                    'api:band-detail', kwargs={'pk': band.pk}
                )) for band in self.user.band_set.all()
            ],
            'key': self.user.auth_token.key,
        })

    def __unicode__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_profile(sender, instance, signal, created, **kwargs):
    if created:
        # create profile and Token
        Profile(user=instance).save()
        Token.objects.create(user=instance)

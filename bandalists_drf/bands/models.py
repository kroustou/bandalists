from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save, m2m_changed
from django.dispatch import receiver
from bands.utils import unique_slugify
from channels import Group
import json

class Band(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, blank=True)
    members = models.ManyToManyField(User)

    def save(self, **kwargs):
        '''
        Automatically set slug value and make sure it is unique.
        '''
        # in case the band has not been created
        if not self.pk:
            unique_slugify(self, self.name)
        super(Band, self).save(**kwargs)

    def __unicode__(self):
        return self.name


class Instrument(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User)
    band = models.ForeignKey(Band)

    def __unicode__(self):
        return self.name


class BandImage(models.Model):
    image = models.ImageField(upload_to='bands')
    band = models.ForeignKey(Band)
    primary = models.BooleanField(default=False)

    def __unicode__(self):
        return self.band.name


def print_band(sender, instance, action, reverse, model, pk_set, **kwargs):
    if action == 'post_add':
        Group(instance.slug).send({"text": json.dumps({'notification_type': 'update_bands'})})
m2m_changed.connect(print_band, sender=Band.members.through)


@receiver(post_save, sender=Band)
@receiver(post_save, sender=BandImage)
def notify(sender, instance, signal, created, **kwargs):
    Group(instance.slug).send({"text": json.dumps({'notification_type': 'update_bands'})})


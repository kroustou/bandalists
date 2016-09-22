from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
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


@receiver(post_save, sender=Band)
@receiver(post_save, sender=BandImage)
def notify(sender, instance, signal, created, **kwargs):
    print instance.slug
    Group(instance.slug).send({"text": json.dumps({'notification_type': 'update_bands'})})


from django.db import models
from django.contrib.auth.models import User
from bands.utils import unique_slugify


class Band(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, blank=True)
    members = models.ManyToManyField(User)

    def save(self, **kwargs):
        '''
        Automatically set slug value and make sure it is unique.
        '''
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

from django.db import models
from django.contrib.auth.models import User
from bands.utils import unique_slugify


class Band(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, blank=True)
    members = models.ManyToManyField(User, null=True, blank=True)

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

    def save(self, **kwargs):
        '''
        Make sure that the band is the users
        '''
        if self.band not in self.user.band_set.all():
            raise ValueError('User not in the band he claims to be.')
        super(Band, self).save(**kwargs)

    def __unicode__(self):
        return self.name

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

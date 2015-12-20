from django.db import models
from django.contrib.auth.models import User


class Band(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    members = models.ManyToManyField(User)

    def __unicode__(self):
        return self.name

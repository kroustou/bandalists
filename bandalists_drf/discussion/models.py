from django.db import models
from django.core.urlresolvers import reverse
from django.conf import settings
from bands.models import Band
User = settings.AUTH_USER_MODEL


class Thread(models.Model):
    dashboard = models.ForeignKey(Band)
    text = models.TextField()
    author = models.ForeignKey(User, related_name='thread')
    date = models.DateTimeField(auto_now_add=True)
    last_edit = models.DateTimeField(auto_now=True)
    # can have a parent thread (act as a comment)
    parent = models.ForeignKey('Thread', null=True, blank=True)
    seen_by = models.ManyToManyField(
        User,
        related_name='seen_threads'
    )

    class Meta:
        ordering = ['last_edit']

    def __unicode__(self):
        return self.text

    def get_absolute_url(self):
        return reverse('api:thread-detail', kwargs={'pk': self.pk})

    @property
    def channel(self):
        return 'dashboard-%s' % self.dashboard.slug

    @property
    def children(self):
        return self.thread_set.all()

    def get_notification_message(self):
        from discussion.serializers import ThreadSerializer
        return ThreadSerializer(self).data

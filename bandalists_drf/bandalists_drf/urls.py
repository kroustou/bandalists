from django.conf.urls import include, url

from django.contrib import admin
from discussion.viewsets import ThreadViewSet
from bands.viewsets import BandViewSet, InstrumentViewSet
from profiles.views import Profile, UserProfile
from notifications.viewsets import NotificationsViewSet
from rest_framework import routers

admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'threads', ThreadViewSet, 'thread')
router.register(r'bands', BandViewSet, 'band')
router.register(r'notifications', NotificationsViewSet, 'notifications')
router.register(r'instruments', InstrumentViewSet, 'instruments')

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^', include(router.urls, namespace='api')),
    url(r'me/', Profile.as_view(), name='user'),
    url(r'user/(?P<username>([\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}|\w+))/', UserProfile.as_view(), name='user-detail')
]

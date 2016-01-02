from django.conf.urls import include, url

from django.contrib import admin
from discussion.viewsets import ThreadViewSet
from bands.viewsets import BandViewSet, InstrumentViewSet, UserViewSet
from notifications.viewsets import NotificationsViewSet
from rest_framework import routers

admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'threads', ThreadViewSet, 'thread')
router.register(r'users', UserViewSet, 'user')
router.register(r'bands', BandViewSet, 'band')
router.register(r'notifications', NotificationsViewSet, 'notifications')
router.register(r'instruments', InstrumentViewSet, 'notifications')

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^', include(router.urls, namespace='api')),
]

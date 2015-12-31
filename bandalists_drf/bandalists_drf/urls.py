from django.conf.urls import include, url

from django.contrib import admin
from discussion.viewsets import ThreadViewSet
from bands.viewsets import BandViewSet
# from notifications.viewsets import NotificationsViewSet
from rest_framework import routers

admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'threads', ThreadViewSet, base_name='thread')
router.register(r'bands', BandViewSet, base_name='band')
# router.register(r'notifications', NotificationsViewSet, base_name='notifications')

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^', include(router.urls, namespace='api')),
]

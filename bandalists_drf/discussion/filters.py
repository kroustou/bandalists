import django_filters

from .models import Thread


class DashboardFilter(django_filters.FilterSet):

    class Meta:
        model = Thread
        fields = ('dashboard', )

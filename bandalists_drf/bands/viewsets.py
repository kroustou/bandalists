from rest_framework import viewsets
from .serializers import BandSerializer, InstrumentSerializer
from django.contrib.auth import get_user_model
User = get_user_model()


class BandViewSet(viewsets.ModelViewSet):
    serializer_class = BandSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return self.request.user.band_set.all()


class InstrumentViewSet(viewsets.ModelViewSet):
    serializer_class = InstrumentSerializer

    def get_queryset(self):
        return self.request.user.instrument_set.all()

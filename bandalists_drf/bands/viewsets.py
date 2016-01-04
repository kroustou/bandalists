from rest_framework import viewsets
from .serializers import BandSerializer, InstrumentSerializer
from .filters import BandFilter
from django.contrib.auth import get_user_model
User = get_user_model()


class BandViewSet(viewsets.ModelViewSet):
    serializer_class = BandSerializer
    filter_class = BandFilter

    def get_queryset(self):
        return self.request.user.band_set.all()


class InstrumentViewSet(viewsets.ModelViewSet):
    serializer_class = InstrumentSerializer

    def get_queryset(self):
        return self.request.user.instrument_set.all()

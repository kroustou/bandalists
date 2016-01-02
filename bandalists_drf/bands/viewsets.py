from rest_framework import viewsets
from .serializers import BandSerializer, InstrumentSerializer, UserSerializer
from .filters import BandFilter
from django.contrib.auth import get_user_model
User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class BandViewSet(viewsets.ModelViewSet):
    serializer_class = BandSerializer
    filter_class = BandFilter

    def get_queryset(self):
        return self.request.user.band_set.all()


class InstrumentViewSet(viewsets.ModelViewSet):
    serializer_class = InstrumentSerializer

    def get_queryset(self):
        return self.request.user.instrument_set.all()

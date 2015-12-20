from rest_framework import viewsets
from bands.serializers import BandSerializer


class BandViewSet(viewsets.ModelViewSet):
    serializer_class = BandSerializer

    def get_queryset(self):
        return self.request.user.band_set.all()

from rest_framework import viewsets
from bands.serializers import BandSerializer
from .filters import BandFilter


class BandViewSet(viewsets.ModelViewSet):
    serializer_class = BandSerializer
    filter_class = BandFilter

    def get_queryset(self):
        return self.request.user.band_set.all()

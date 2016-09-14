from rest_framework import viewsets, status
from .serializers import BandSerializer, InstrumentSerializer
from django.contrib.auth import get_user_model
from rest_framework.decorators import detail_route
from rest_framework.response import Response

User = get_user_model()


class BandViewSet(viewsets.ModelViewSet):
    serializer_class = BandSerializer
    lookup_field = 'slug'

    @detail_route(methods=['delete'])
    def leave(self, request, slug=None):
        try:
            band = request.user.band_set.get(slug=slug)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            band.members.remove(request.user)
            return Response(status=status.HTTP_204_NO_CONTENT)


    def get_queryset(self):
        return self.request.user.band_set.all()


class InstrumentViewSet(viewsets.ModelViewSet):
    serializer_class = InstrumentSerializer

    def get_queryset(self):
        return self.request.user.instrument_set.all()

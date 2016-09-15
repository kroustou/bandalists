from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from .serializers import BandSerializer, InstrumentSerializer
from .models import Band
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

    @detail_route(methods=['post'])
    def add(self, request, slug=None):
        user = request.data.get('id')
        if user:
            user = get_object_or_404(User, id=user)
            band = get_object_or_404(Band, slug=slug)
            band.members.add(user)
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


    def get_queryset(self):
        return self.request.user.band_set.all()


class InstrumentViewSet(viewsets.ModelViewSet):
    serializer_class = InstrumentSerializer

    def get_queryset(self):
        return self.request.user.instrument_set.all()

from django.core.exceptions import PermissionDenied
from django.db.models import Q
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status
import logging
logging.basicConfig()
User = get_user_model()

from .serializers import UserSerializer, ProfileSerializer
from bands.models import Band
from .models import Invitation


class Profile(APIView):
    permission_classes = (permissions.AllowAny,)
    parser_classes = (MultiPartParser,)

    def get(self, request, format=None):
        """
        Return user's profile.
        """
        if request.user.is_authenticated():
            return Response(request.user.profile.to_dict())
        else:
            raise PermissionDenied

    def post(self, request, format=None):
        '''
        Create user.
        Accepts username, password, email from anonymous users only
        '''
        if request.user.is_authenticated():
            raise PermissionDenied
        else:
            serialized = UserSerializer(data=request.data)
            # the user has not set an email
            # which is fine, but we have to inform django about it.
            if not request.data.get('email'):
                request.data.update({'email': ''})
            if serialized.is_valid():
                user = serialized.save()
                return Response(
                    user.profile.to_dict(),
                    status=status.HTTP_201_CREATED
                )
            else:
                return Response(
                    serialized.errors,
                    status=status.HTTP_400_BAD_REQUEST
                )

    def put(self, request, format=None):
        if request.user.is_authenticated():
            request.data['user'] = request.user.pk
            serializer = ProfileSerializer(data=request.data)
            if serializer.is_valid():
                obj = serializer.save()
            return Response(
                obj,
                status=status.HTTP_200_OK
            )
        else:
            raise PermissionDenied

    def delete(self, request, format=None):
        if request.user.is_authenticated():
            request.user.profile.delete()
            request.user.delete()
            return Response(
                {},
                status=status.HTTP_202_ACCEPTED
            )
        else:
            raise PermissionDenied


class UserProfile(APIView):

    def get(self, request, username, format=None):
        slug = request.GET.get('slug')
        if slug:
            obj = User.objects.filter(
                (Q(username__contains=username) | Q(email__contains=username)) & ~Q(band__slug=slug)
            )
            if len(obj) < 5:
                print obj
                if len(obj) == 0:
                    return Response(
                        {
                            'found': False
                        },
                        status=status.HTTP_204_NO_CONTENT
                    )
                return Response(
                    [{
                        'username': o.username,
                        'id': o.id,
                        'email': o.email
                    } for o in obj],
                    status=status.HTTP_202_ACCEPTED
                )
        return Response(
            [],
            status=status.HTTP_207_MULTI_STATUS
        )



class InviteUser(APIView):

    def post(self, request, email, band_slug):
        # check if email already exists in the database
        # and add it to the band.
        band = get_object_or_404(Band, slug=band_slug)
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            # we have to create a new invitation for this email
            Invitation(band=band, email=email, invited_by=request.user).save()
        else:
            # if request user is in the band,
            # they can add a new member
            if band.members.get(id=request.user.id):
                band.members.add(user)
                return Response(
                    [],
                    status=status.HTTP_202_ACCEPTED
                )
        return Response(
            [],
            status=status.HTTP_201_CREATED
        )

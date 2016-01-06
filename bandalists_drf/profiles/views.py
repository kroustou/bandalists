from django.core.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status

from django.contrib.auth import get_user_model
User = get_user_model()

from .serializers import UserSerializer, ProfileSerializer


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
    permission_classes = (permissions.AllowAny,)

    def get(self, request, pk, format=None):
        return self.get_object(pk)

    def get_object(self, pk):
        obj = get_object_or_404(User, pk=pk)
        return Response(
            obj.profile.to_dict(),
            status=status.HTTP_202_ACCEPTED
        )

from django.core.exceptions import PermissionDenied
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status


class Profile(APIView):
    permission_classes = (permissions.AllowAny,)

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
        pass

    def delete(self, request, format=None):
        pass

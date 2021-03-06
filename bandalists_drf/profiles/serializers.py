from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User as DefaultUserModel
from django.conf import settings
User = settings.AUTH_USER_MODEL


class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        user = get_user_model()(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = DefaultUserModel
        fields = ('username', 'email', 'password')
        write_only_fields = ('password',)


class ProfileSerializer(serializers.BaseSerializer):
    '''
    Accepts user data and updates the user and userprofile
    models.
    '''

    def to_representation(self, obj):
        return obj.profile.to_dict()

    def to_internal_value(self, data):
        '''
        Parse data. (Here is the place to make any validations)
        In case some values have not been passed from the request,
        they remain unchainged by beeing set to the existing value
        (second param of the data.get)
        '''
        User = get_user_model()
        self.user = User.objects.get(pk=data.get('user'))
        dict_to_return = {
            'username': data.get('username', self.user.username),
            'name': data.get('name', self.user.first_name),
            'surname': data.get('surname', self.user.last_name),
            'avatar': data.get('avatar', self.user.profile.avatar),
            'email': data.get('email', self.user.email),
        }
        if data.get('password'):
            dict_to_return['password'] = data.get('password')
        return dict_to_return

    def create(self, data):
        '''
        Update all the fields based on the to_internal_value output
        '''
        self.user.first_name = data.get('name')
        self.user.last_name = data.get('surname')
        self.user.username = data.get('username')
        self.user.profile.avatar = data.get('avatar')
        self.user.email = data.get('email')
        if 'password' in data.keys():
            self.user.set_password(data.get('password'))
        self.user.save()
        self.user.profile.save()
        return self.user.profile.to_dict()

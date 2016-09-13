from rest_framework import serializers
from .models import Band, Instrument, BandImage
from django.contrib.auth import get_user_model
User = get_user_model()


class BandImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = BandImage
        fields = (
            'id',
            'image',
            'primary'
        )


class MemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'username',
        )


class BandSerializer(serializers.ModelSerializer):
    bandimage_set = BandImageSerializer(many=True, read_only=True)
    members = MemberSerializer(many=True, read_only=True)

    def create(self, data):
        obj = super(BandSerializer, self).create(data)
        obj.members.add(self.context['request'].user.pk)
        return obj

    class Meta:
        model = Band
        fields = (
            'pk',
            'id',
            'name',
            'slug',
            'members',
            'bandimage_set',
        )
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class InstrumentSerializer(serializers.ModelSerializer):

    def validate(self, data):
        data.update({'user': self.context.get('request').user})
        if data.get('band') not in data.get('user').band_set.all():
            raise serializers.ValidationError('User not in this band.')
        return data

    class Meta:
        model = Instrument
        fields = (
            'id',
            'name',
            'band',
        )

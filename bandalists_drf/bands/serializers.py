from rest_framework import serializers
from .models import Band, Instrument
from django.contrib.auth import get_user_model
User = get_user_model()


class BandSerializer(serializers.HyperlinkedModelSerializer):
    members = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='api:user-detail'
    )

    class Meta:
        model = Band
        fields = (
            'name',
            'slug',
            'members',
        )


class InstrumentSerializer(serializers.HyperlinkedModelSerializer):

    def validate(self, data):
        if data.get('band') not in data.get('user').band_set.all():
            raise serializers.ValidationError('User not in this band.')
        return data

    class Meta:
        model = Instrument


from rest_framework import serializers
from .models import Band, Instrument
from django.contrib.auth import get_user_model
User = get_user_model()


class BandSerializer(serializers.HyperlinkedModelSerializer):

    def create(self, data):
        obj = super(BandSerializer, self).create(data)
        obj.members.add(self.context['request'].user.pk)
        return obj

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

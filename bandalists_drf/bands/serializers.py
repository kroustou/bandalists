from rest_framework import serializers
from .models import Band, Instrument


class BandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Band


class InstrumentSerializer(serializers.ModelSerializer):

    def validate(self, data):
        if data.get('band') not in data.get('user').band_set.all():
            raise serializers.ValidationError('User not in this band.')
        return data

    class Meta:
        model = Instrument

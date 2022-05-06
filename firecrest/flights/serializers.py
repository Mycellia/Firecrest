from rest_framework import serializers
from .models import *


class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = '__all__'


class AirlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airline
        fields = '__all__'


class Flight_SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight_Seat
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'


class Flight_ManifestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight_Manifest
        fields = '__all__'

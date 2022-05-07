from .models import *
from .serializers import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication


class AirlineList(generics.ListCreateAPIView):

    authentication_classes = ([])
    queryset = Airline.objects.all()
    serializer_class = AirlineSerializer
    permission_classes = ([])


class FlightList(generics.ListCreateAPIView):

    authentication_classes = ([])
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
    permission_classes = ([])


class FlightDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = ([])
    queryset = Flight
    serializer_class = FlightSerializer
    permission_classes = ([])


class Flight_SeatList(generics.ListCreateAPIView):

    authentication_classes = ([])
    queryset = Flight_Seat.objects.all()
    serializer_class = Flight_SeatSerializer
    permission_classes = ([])


class Flight_SeatDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = ([])
    queryset = Flight_Seat
    serializer_class = Flight_SeatSerializer
    permission_classes = ([])


class BookingList(generics.ListCreateAPIView):

    authentication_classes = ([])
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = ([])


class BookingDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = ([])
    queryset = Booking
    serializer_class = BookingSerializer
    permission_classes = ([])


class Flight_ManifestList(generics.ListCreateAPIView):

    authentication_classes = ([])
    queryset = Flight_Manifest.objects.all()
    serializer_class = Flight_ManifestSerializer
    permission_classes = ([])


class Flight_ManifestDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = ([])
    queryset = Flight_Seat
    serializer_class = Flight_SeatSerializer
    permission_classes = ([])

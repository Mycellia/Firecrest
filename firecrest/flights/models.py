from django.db import models


class Airline(models.Model):
    airline_id = models.CharField(max_length=100)
    airline_name = models.CharField(max_length=30)
    airline_country = models.CharField(max_length=30)


class Flight_Seat(models.Model):
    seat_id = models.CharField(max_length=100)
    flight_class = models.CharField(max_length=20, null=True)


class Flight(models.Model):
    flight_id = models.CharField(max_length=100)
    departing_gate = models.CharField(max_length=30)
    arriving_gate = models.CharField(max_length=30)
    airline = models.ForeignKey(
        Airline, on_delete=models.PROTECT)
    departing_airport = models.CharField(max_length=30)
    arriving_airport = models.CharField(max_length=30)


class Booking(models.Model):
    booking_id = models.CharField(max_length=100, unique=True)
    flight = models.ForeignKey(Flight, on_delete=models.PROTECT)
    seat = models.ForeignKey(Flight_Seat, on_delete=models.PROTECT)
    status = models.CharField(max_length=20)
    user_id = models.CharField(max_length=100)


class Flight_Manifest(models.Model):
    plain_id = models.CharField(max_length=100)
    flight = models.ForeignKey(Flight, on_delete=models.PROTECT)
    booking = models.ForeignKey(
        Booking, on_delete=models.PROTECT)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

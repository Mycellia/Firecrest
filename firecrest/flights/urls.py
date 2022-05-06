from django.urls import URLPattern, path
from . import views

urlpatterns = [
    path('flights/api', views.FlightList.as_view()),
    path('airline/api', views.AirlineList.as_view()),
    path('flightseat/api', views.Flight_SeatList.as_view()),
    path('booking/api', views.BookingList.as_view()),
    path('flightmanifest/api', views.Flight_ManifestList.as_view()),
]

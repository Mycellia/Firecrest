from django.urls import path, include, re_path
from django.contrib import admin
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),  # JSON web token path
    path('', include('flights.urls')),
    path('api/stripe/', include('payments.urls')),
]

# Handling All Other Routes
urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]

from django.urls import path
from .api import views

urlpatterns = [
    path('api/languages/', views.get_language_data, name='get_language_data'),
]
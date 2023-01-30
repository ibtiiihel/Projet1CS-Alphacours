from django.urls import path
from .views import HomeView

urlpatterns  = [
    path('alphacours/', HomeView.as_view(), name='home'),
]
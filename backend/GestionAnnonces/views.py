from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Annonce
# Create your views here.

class HomeView(ListView):
    model = Annonce
    template_name = 'home.html'

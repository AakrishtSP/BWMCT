from django.urls import path
from . import views

urlpatterns = [
    path('match/', views.getMatch),
    path('team/', views.getTeam),
    path('player/', views.getPlayer),
]

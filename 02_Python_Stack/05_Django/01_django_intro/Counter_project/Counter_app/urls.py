from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('add2', views.add2),
    path('yourchoice', views.yourchoice),
    path('destroy_session', views.destroy_session),
]



























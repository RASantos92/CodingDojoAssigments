from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime



def index(request):
    context = {
        "military_time": strftime("%H:%M"),
        "date": strftime("%d %B %y"),
    }
    return render(request, 'index.html', context)








# Create your views here.

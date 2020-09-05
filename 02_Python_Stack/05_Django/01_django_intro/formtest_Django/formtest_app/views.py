from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request , "index.html")

def create_user(request):
    print("POST THIS STUFF HOMIE!..........")
    # print(request.POST)
    name_from_form = request.POST['name']
    email_from_form = request.POST['email']
    context = {
        "name_on_template" : name_from_form,
        "email_on_template" : email_from_form
    }
    print('*'*100)
    print('*'*100)
    return redirect("/success")

def success(request):
    return render(request, "success.html")










# Create your views here.

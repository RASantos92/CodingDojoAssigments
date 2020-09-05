from django.shortcuts import render, HttpResponse, redirect
import random



def index(request):
    # print('*'*50)
    numGen = random.randint(1,10) 
    request.session['numGen'] = numGen
    context = {
        "stored_value": numGen
    }
    # print(numGen)
    # print('*'*50)
    return render (request, 'index.html', context)

def checkNum(request):
    # print("this is user input:", request.POST["userInput"])
    if int(request.POST["userInput"]) == request.session['numGen']:
        match= int(request.POST["userInput"])        
        print('*'*50)
        print('*'*50)
        print(request.session["numGen"]) 
        print(request.POST["userInput"])
        print("WinnnnnnnnnER!")
        print('*'*50)
        print('*'*50)
    elif int(request.POST["userInput"]) > request.session['numGen']:
        high= int(request.POST["userInput"])
        print('*'*50)
        print('*'*50) 
        print(request.session["numGen"])        
        print(request.POST["userInput"])
        print("Too High Dummy!")
        print('*'*50)
        print('*'*50)
    elif int(request.POST["userInput"]) < request.session['numGen']:
        low= int(request.POST["userInput"])        
        print('*'*50)
        print('*'*50)
        print(request.session["numGen"])  
        print(request.POST["userInput"])
        print("Too Low DumDum!")
        print('*'*50)
        print('*'*50)
    return redirect('/')





    # userInput = request.session.POST('userInput')
    # print("userInput")





# Create your views here.

from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'Pages/login.html')

def createAccount(request):
    return render(request, 'Pages/Create_account.html')

def shopKart(request):
    return render(request, 'Pages/Carrito.html')



#Lui
def accesories(request):
    return render(request, 'Pages/accesorios.html')




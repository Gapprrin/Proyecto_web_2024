from django.shortcuts import render
from .models import *
# Create your views here.

def home(request):
    productos = Producto.objects.all()
    return render(request, 'index.html', {'producto':productos})

def login(request):
    return render(request, 'Pages/login.html')

def createAccount(request):
    return render(request, 'Pages/Create_account.html')

def shopKart(request):
    return render(request, 'Pages/Carrito.html')



#Lui
def accesories(request):
    return render(request, 'Pages/accesorios.html')

def AboutUs(request):
    return render(request , 'Pages/acerca_de.html' )




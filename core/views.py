
from django.contrib.auth.views import logout_then_login
from django.shortcuts import render
from .models import *

# Create your views here.

from .models import NuevaColeccion

def home(request):
    nueva_coleccion = NuevaColeccion.objects.all()
    return render(request, 'index.html', {'nueva_coleccion': nueva_coleccion})

def modelos(request):
    nueva_coleccion = NuevaColeccion.objects.all()
    vehiculos_deportivos = Vehiculo.objects.filter(categoria__nombreCategoria='Deportivo')
    vehiculos_familiares = Vehiculo.objects.filter(categoria__nombreCategoria='Familiar') 
    vehiculos_electricos = Vehiculo.objects.filter(categoria__nombreCategoria='Electrico') 
    
    contexto = {
        'nueva_coleccion': nueva_coleccion,
        'vehiculos_deportivos': vehiculos_deportivos,
        'vehiculos_familiares': vehiculos_familiares,
        'vehiculos_electricos': vehiculos_electricos,
     
    }
    return render(request, 'Pages/modelos.html', contexto)


def login(request):
    user = User.objects.all()
    return render(request, 'Pages/login.html', {'user':user})

def logout(request):
    return logout_then_login(request, 'login')

def createAccount(request):
    return render(request, 'Pages/Create_account.html')

def shopKart(request):
    return render(request, 'Pages/Carrito.html')



#Lui
def accesories(request):
    return render(request, 'Pages/accesorios.html')

def AboutUs(request):
    return render(request , 'Pages/acerca_de.html' )





from django.urls import path
from .views import *


urlpatterns = [
    path('', home, name= "home"),
    path('login/', login, name= "login"),
    path('logon/', createAccount, name= "create_account"),
    path('shopKart/', shopKart, name= 'Carrito'),
    path('accesorios/' , accesories , name= 'accesorios'),
    path('acerca_de/', AboutUs , name="acerca_de"),
]
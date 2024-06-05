
from django.contrib.auth.views import LoginView
from django.contrib import admin
from django.urls import path
from .views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name= "home"),
    path('modelos/', modelos, name= "modelos"),
    path('login/', LoginView.as_view(template_name="pages/login.html"), name= "login"),
    path('logon/', createAccount, name= "create_account"),
    path('shopKart/', shopKart, name= 'Carrito'),
    path('accesorios/' , accesories , name= 'accesorios'),
    path('acerca_de/', AboutUs , name="acerca_de"),
]  
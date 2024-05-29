from django.db import models

# Create your models here.
class Producto(models.Model):
    id = models.CharField(max_length=4,primary_key=True)
    nombre = models.CharField(max_length=60)
    descripcion = models.CharField(max_length=200)
    precio = models.IntegerField()
    stock = models.IntegerField()
    oferta = models.BooleanField()
    imagen = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombre

class User(models.Model):
    id = models.AutoField(primary_key = True)
    user_name = models.CharField(max_length = 30)
    user_mail = models.CharField(max_length = 60)
    user_pass = models.CharField(max_length = 10)
    user_commune = models.CharField(max_length = 25)
    
    def __str__(self):
        return self.user_name
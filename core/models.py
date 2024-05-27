from django.db import models

# Create your models here.
class Producto(models.Model):
    id = models.CharField(max_length=4,primary_key=True)
    nombre = models.CharField(max_length=60)
    descripcion = models.CharField(max_length=200)
    precio = models.IntegerField(max_length=10)
    stock = models.IntegerField(max_length=10)
    oferta = models.BooleanField()
    imagen = models.CharField(max_length=200)
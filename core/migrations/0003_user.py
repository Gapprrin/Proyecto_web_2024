# Generated by Django 5.0.1 on 2024-05-29 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_producto_precio_alter_producto_stock'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.CharField(max_length=900, primary_key=True, serialize=False)),
                ('user_name', models.CharField(max_length=30)),
                ('user_mail', models.CharField(max_length=60)),
                ('user_pass', models.CharField(max_length=10)),
                ('user_commune', models.CharField(max_length=25)),
            ],
        ),
    ]
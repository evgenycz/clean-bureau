from django.db import models

# Create your models here.

class Form(models.Model):
    name = models.CharField(max_length=50, default = "")
    surname = models.CharField(max_length=50, default = "")
    phone = models.CharField(max_length=50, default = "")
    user_mail = models.EmailField(default='default@example.com')
    type_building = models.CharField(max_length=50, default="", blank=True)
    rooms = models.CharField(max_length=50)
    area_rooms = models.CharField(max_length=50)
    bathrooms = models.CharField(max_length=50, default = "")
    typ_of_cleaning = models.CharField(max_length=50)
    comments = models.TextField(max_length=200, default = "", blank=True)
    lastCleaning = models.CharField(max_length=50, default = "")
    time = models.CharField(max_length=50)
    price = models.CharField(max_length=50, default = "")
    services = models.JSONField(null=True, blank=True)

    def __str__(self):
        return f"Name: {self.name} {self.surname}"
    
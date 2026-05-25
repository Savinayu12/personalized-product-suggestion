from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    category = models.CharField(max_length=100)
    description = models.TextField()
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.name
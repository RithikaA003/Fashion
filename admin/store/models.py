from django.db import models


# PRODUCT MODEL
class Product(models.Model):

    category = models.CharField(
        max_length=100
    )

    name = models.CharField(
        max_length=200
    )

    description = models.TextField()

    color = models.CharField(
        max_length=100
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    stock = models.IntegerField()

    image = models.ImageField(
        upload_to='products/'
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name



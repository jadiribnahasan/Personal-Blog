from django.db import models


class blog(models.Model):
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=2000)
    likes = models.IntegerField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

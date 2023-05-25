from django.db import models

# Create your models here.

class Projects(models.Model):
    name = models.CharField(max_length=100)
    short_description = models.CharField(max_length=255)
    source_link = models.URLField(max_length=200)
    live_link = models.URLField(max_length=200)
    long_description = models.TextField()
    
    def __str__(self):
        return self.name
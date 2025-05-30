from django.db import models

class Post(models.Model):
    
    title = models.CharField(max_length=255, unique=True)
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

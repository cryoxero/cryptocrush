from django.urls import path
from .views import posts_page

app_name = "posts"

urlpatterns = [
    path('<slug:slug>', posts_page, name="posts")
]

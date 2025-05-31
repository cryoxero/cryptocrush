from django.urls import path
from .views import posts_page, posts_welcome

app_name = "posts"

urlpatterns = [
    path('', posts_welcome, name="posts_welcome"),
    path('<slug:slug>', posts_page, name="posts"),
]

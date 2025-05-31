from django.shortcuts import render
from .models import Post

def posts_page(req, slug):
    post_list = Post.objects.values("title", "slug")
    curr_post = Post.objects.get(slug=slug)
    return render(req, 'posts/posts_index.html', {"post_list": post_list, "curr_post": curr_post})

def posts_welcome(req):
    post_list = Post.objects.values("title", "slug")
    curr_post = Post.objects.get(slug="welcome")
    return render(req, 'posts/posts_index.html', {"post_list": post_list, "curr_post": curr_post})

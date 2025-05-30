from django.shortcuts import render

def posts_page(req):
    return render(req, 'posts/posts_index.html')

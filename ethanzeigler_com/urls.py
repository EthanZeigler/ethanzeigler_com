"""
URL configuration for ethanzeigler_com project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, re_path
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django_vite.views import dev_server, serve_static

urlpatterns = [
    path('admin/', admin.site.urls),

        # Path to your Vue.js app's index.html file
    path('', never_cache(TemplateView.as_view(template_name='index.html')), name='home'),
    
    # Path to your Vue.js app's static files
    re_path(r'^static/(?P<path>.*)$', serve_static),

    # Path to the Vite development server during development
    path('__vite_dev_server__', dev_server),
]

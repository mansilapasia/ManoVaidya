"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView
from backend.views import ChatterBotApiView 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', include('signup.urls')),
    path('survey/', include('survey.urls')),
    path('chatbot/',include('chatbot.urls')),
    path('api/chatterbot/', ChatterBotApiView.as_view(), name='chatterbot'),
    path('', TemplateView.as_view(template_name='index.html')),
]

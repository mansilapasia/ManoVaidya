from django.conf.urls import url 
from django.urls import path
from chatbot import views 
from django.views.generic import TemplateView
 
urlpatterns = [ 
    path('chatmsg', views.chatmsg)
]
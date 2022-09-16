from django.conf.urls import url 
from django.urls import path
from signup import views 
from django.views.generic import TemplateView
 
urlpatterns = [ 
    path('registeruser', views.signuprequest),
    path('registertherapist', views.signuptherapistrequest),
    path('login', views.login),
    path('gettherapists', views.getalltherapists),
    path('gettherapist', views.istherapist),
    path('updatetherapist',views.updatetherapist),
    path('gettherapistsessions',views.getalltherapistsessions),
    path('getusersessions',views.getallusersessions),
    path('addsession',views.addSession)
    
]
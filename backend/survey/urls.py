from django.conf.urls import url 
from django.urls import path
from survey import views 
from django.views.generic import TemplateView
 
urlpatterns = [ 
    path('surveyanswer', views.surveyrequest),
]


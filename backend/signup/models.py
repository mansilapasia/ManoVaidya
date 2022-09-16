from django.db import models


class UserSignup(models.Model):
    emailid = models.EmailField(max_length=200,blank=False, default='')
    password = models.CharField(max_length=30,blank=False, default='')
    name = models.CharField(max_length=70, blank=False, default='')
    phone = models.CharField(max_length=10, blank=False, default='')
    age = models.PositiveSmallIntegerField(blank=False, default=0)
    gender = models.PositiveSmallIntegerField(blank=False, default=0)
    therapist = models.CharField(max_length=10, default='')

class TherapistSignup(models.Model):
    emailid = models.EmailField(max_length=200,blank=False, default='')
    password = models.CharField(max_length=30,blank=False, default='')
    name = models.CharField(max_length=70, blank=False, default='')
    phone = models.CharField(max_length=10, blank=False, default='')
    age = models.PositiveSmallIntegerField(blank=False, default=0)
    gender = models.PositiveSmallIntegerField(blank=False, default=0)
    prooffile = models.FileField(upload_to='uploads/')

class TherapySession(models.Model):
    useremail = models.EmailField(max_length = 200, blank= False, default='')
    therapistemail = models.EmailField(max_length = 200, blank = False, default ='')
    date = models.PositiveSmallIntegerField(blank=False, default=0)
    month = models.PositiveSmallIntegerField(blank=False, default=0)
    year = models.PositiveSmallIntegerField(blank=False, default=0)
    time = models.PositiveSmallIntegerField(blank=False, default=0)
    roomid = models.CharField(max_length=20, blank=False, default='')  
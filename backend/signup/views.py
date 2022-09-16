from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.core.exceptions import ObjectDoesNotExist
from signup.serializers import SignupSerializer
from signup.serializers import SignupTherapistSerializer
from signup.serializers import SessionSerializer
from rest_framework.decorators import api_view
from signup.forms import TherapistForm
from signup.models import UserSignup
from signup.models import TherapistSignup
from signup.models import TherapySession
from collections import Iterable
# Create your views here.
def signupView(request):
    return HttpResponse('Hello, World!')

@api_view(['GET', 'PUT', 'DELETE'])
def signuprequest(request):
    if request.method == 'PUT':
        user_data = JSONParser().parse(request)
        signup_serializer = SignupSerializer(data=user_data)
        if signup_serializer.is_valid():
            try:
                user = UserSignup.objects.get(emailid = user_data['emailid']) 
                return JsonResponse("User exists" ,status=status.HTTP_206_PARTIAL_CONTENT, safe=False)
            except ObjectDoesNotExist:
                signup_serializer.save()
                return JsonResponse(signup_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(signup_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def signuptherapistrequest(request):
    if request.method == 'POST':
        user_data = TherapistForm(request.POST, request.FILES)
        if user_data.is_valid():
            try:
                user = TherapistSignup.objects.get(emailid = user_data['emailid'])
                return JsonResponse("User exists" ,status=status.HTTP_206_PARTIAL_CONTENT, safe=False)
            except ObjectDoesNotExist:
                user_data.save()
                return JsonResponse(user_data.data ,status=status.HTTP_201_CREATED) 
        return JsonResponse(user_data.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def login(request):
    if request.method == 'PUT':
        user_data = JSONParser().parse(request)
        try:
            user = UserSignup.objects.get(emailid = user_data['emailid'])
            if user.password == user_data['password']:
                return JsonResponse(user_data['emailid'] ,status=status.HTTP_200_OK, safe=False)
            else:
                return JsonResponse("Incorrect Credentials" ,status=status.HTTP_206_PARTIAL_CONTENT, safe=False)
        except ObjectDoesNotExist:
            try:
                user = TherapistSignup.objects.get(emailid = user_data['emailid'])
                if user.password == user_data['password']:
                    return JsonResponse(user_data['emailid'] ,status=status.HTTP_201_CREATED, safe=False)
                else:
                    return JsonResponse("Incorrect Credentials" ,status=status.HTTP_206_PARTIAL_CONTENT, safe=False)
            except ObjectDoesNotExist:
                return JsonResponse("Invalid Login credentials", status=status.HTTP_400_BAD_REQUEST, safe=False)

@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def istherapist(request):
    if request.method == 'PUT':
        user_data = JSONParser().parse(request)
        user = UserSignup.objects.get(emailid = user_data['emailid'])
        if user.therapist == '':
            return JsonResponse(user_data['emailid'] ,status=status.HTTP_206_PARTIAL_CONTENT, safe=False)
        else:
            return JsonResponse(user.therapist ,status=status.HTTP_200_OK, safe=False)

@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def updatetherapist(request):
    if request.method == 'PUT':
        user_data = JSONParser().parse(request)
        user = UserSignup.objects.get(emailid = user_data['emailid'])
        user.therapist = user_data['therapist']
        try:
            user.save()
            return JsonResponse(user.therapist ,status=status.HTTP_200_OK, safe=False)
        except:
            print("Therapist update error")

@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def getalltherapists(request):
    if request.method == 'GET':
        therapist = TherapistSignup.objects.all().values()
        return JsonResponse({"therapists":list(therapist)}, status=status.HTTP_200_OK, safe=False) 

@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def getalltherapistsessions(request):
    try:
        if request.method == 'POST':
            user_data = JSONParser().parse(request)
            therapist = TherapySession.objects.all().filter(therapistemail = user_data['therapist']).values()
            return JsonResponse({"sessions":list(therapist)}, status=status.HTTP_200_OK, safe=False) 
    except ObjectDoesNotExist:
        #print(therapist)
        #print(list(therspist))
        return JsonResponse({"sessions":[]}, status = status.HTTP_200_OK, safe=False)

@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def addSession(request):
    if request.method == 'POST':
        user_data = JSONParser().parse(request)
        session_serializer = SessionSerializer(data = user_data)
        #user_data = TherapySession(request.POST)
        if session_serializer.is_valid():
            session_serializer.save()
            return JsonResponse(session_serializer.data ,status=status.HTTP_201_CREATED) 
        return JsonResponse(session_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def getallusersessions(request):
    try:
        if request.method == 'POST':
            user_data = JSONParser().parse(request)
            sessions = TherapySession.objects.all().filter(useremail = user_data['emailid']).values()
            if isinstance(sessions, Iterable) == False:
                return JsonResponse({"sessions": [sessions]}, status=status.HTTP_200_OK, safe=False)    
            return JsonResponse({"sessions":list(sessions)}, status=status.HTTP_200_OK, safe=False) 
    except ObjectDoesNotExist:
        #print(therapist)
        #print(list(therspist))
        return JsonResponse({"sessions":[]}, status = status.HTTP_200_OK, safe=False)

#@api_view(['GET', 'PUT', 'DELETE'])
#def loginrequest(request):
#    if request.method == 'PUT':
#        user_data = JSONParser.parse(request)
#        user = Signup.objects.get(pass) 


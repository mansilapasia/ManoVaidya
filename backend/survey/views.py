from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view
import pickle 
import pandas as pd

# Create your views here.
def surveyView(request):
    return HttpResponse('Hello, World!')
    
@api_view(['GET', 'POST','PUT'])
def surveyrequest(request):
    print(request.data)
    #filename = './survey/finalized_model.sav'
    loaded_model = pickle.load(open(r'./survey/finalized_model.sav', 'rb'))
    mytest = {'age':[int(request.data["age group"])], 'gender':[int(request.data["gender"])], 'occupation':[int(request.data["Occupational Status"])], 'interest_pleasure':[int(request.data["interest or pleasure"])], 'feel_tired':[int(request.data["feel tired"])], 'feel_bad':[int(request.data["feel bad"])],'feel_trouble':[int(request.data["feel trouble"])], 'feel_restless':[int(request.data["feel slowly"])], 'feel_sad':[int(request.data["feel sad"])], 'feel_angry':[int(request.data["feel angry"])], 'confusion':[int(request.data["confusion"])],'thoughts':[int(request.data["thoughts"])], 'poor_appetite':[int(request.data["poor appetite"])], 'sleep_cycle':[int(request.data["sleep cycle"])], 'previously_diagnosed':[int(request.data["diagnosed"])]}
    #print(mytest)
    #print(int(request.data["feel down"]))
    ref = {'age':[3], 'gender':[2], 'occupation':[3], 'interest_pleasure':[1], 'feel_tired':[4], 'feel_bad':[1],'feel_trouble':[1], 'feel_restless':[2], 'feel_sad':[3], 'feel_angry':[1], 'confusion':[1],'thoughts':[1], 'poor_appetite':[3], 'sleep_cycle':[1], 'previously_diagnosed':[0]}
    #print(ref)
    my_test = pd.DataFrame(mytest)
    result = loaded_model.predict(my_test)
    print(int(result))
    print(int(request.data["feel down"]))
    response = (int(result)+int(request.data["feel down"]))/2
    print(response)
    return JsonResponse({"response":response},safe=False)

    
from rest_framework import serializers 
from signup.models import UserSignup
from signup.models import TherapistSignup

from signup.models import TherapySession
 
 
class SignupSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = UserSignup
        fields = ('emailid',
                  'password',
                  'name',
                  'phone',
                  'age',
                  'gender')

class SignupTherapistSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = TherapistSignup
        fields = ('emailid',
                  'password',
                  'name',
                  'phone',
                  'age',
                  'gender',
                  'prooffile')


class SessionSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = TherapySession
        fields = ('useremail',
                  'therapistemail',
                  'date',
                  'month',
                  'year',
                  'time',
                  'roomid')

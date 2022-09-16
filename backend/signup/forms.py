from django import forms
from signup.models import TherapistSignup 

class TherapistForm(forms.ModelForm):
    class Meta:
        model = TherapistSignup
        fields = ('emailid', 'password', 'name', 'phone', 'age', 'gender', 'prooffile')
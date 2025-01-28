from rest_framework import serializers
from .models import WaitlistUser


class WaitlistUserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = WaitlistUser


        
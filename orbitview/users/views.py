from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import WaitlistUserSerializer
from .throttles import WaitlistUserThrottle
from .models import WaitlistUser

class WaitlistUserCreateAPIView(APIView):
    """
    API endpoint to create a waitlist user.
    """

    duplicate_email_message = """You're already on our waitlist! 🎉 We truly appreciate your enthusiasm and can't wait to share exciting updates with you soon. Stay tuned! 🚀"""


    throttle_classes = [WaitlistUserThrottle]


    def post(self, request, *args, **kwargs):
        email = request.data.get("email", "").strip()

        if not email:
            return Response({"message": "Please provide a valid email address."}, status=status.HTTP_400_BAD_REQUEST)

        if WaitlistUser.objects.filter(email=email).exists():
            return Response({"message": self.duplicate_email_message}, status=status.HTTP_200_OK)

        serializer = WaitlistUserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "You're officially on the waitlist! 🎉 We'll keep you updated!", "data": serializer.data}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


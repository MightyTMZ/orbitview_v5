from django.urls import path
from . import views

urlpatterns = [
    path("waitlist/", views.WaitlistUserCreateAPIView.as_view(), name="waitlist-user-create")
]
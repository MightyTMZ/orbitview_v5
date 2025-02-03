from django.urls import path
from . import views

urlpatterns = [
    path("waitlist/", views.WaitlistUserCreateAPIView.as_view(), name="waitlist-user-create"),
    path("waitlist/count/", views.waitlist_number, name="waitlist-user-count"),
]
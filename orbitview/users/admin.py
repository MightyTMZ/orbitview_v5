from django.contrib import admin
from .models import WaitlistUser


@admin.register(WaitlistUser)
class WaitlistUserAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'job_title', 'industry', 'years_of_experience', 'email', 'motivation')
    search_fields = ('full_name', 'email', 'job_title', 'industry')
    list_filter = ('industry', 'years_of_experience')

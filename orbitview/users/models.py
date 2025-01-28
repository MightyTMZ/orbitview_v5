from django.db import models


class WaitlistUser(models.Model):
    full_name = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)
    industry = models.CharField(max_length=355)
    years_of_experience = models.PositiveIntegerField()
    email = models.EmailField(unique=True)
    motivation = models.CharField(max_length=355)

    def __str__(self):
        return f"{self.full_name} ({self.email})"
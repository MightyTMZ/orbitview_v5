# avatars/models.py
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator


class Agent(models.Model):
    name = models.CharField(max_length=255)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='avatars')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    # Avatar configuration
    expertise_areas = models.JSONField()  # Store areas of expertise
    personality_traits = models.JSONField()  # Store personality configuration
    knowledge_base_id = models.CharField(max_length=255)  # Reference to vector DB
    model_config = models.JSONField()  # Store LLM configuration
    
    # Performance metrics
    interaction_count = models.IntegerField(default=0)
    average_rating = models.FloatField(
        default=0,
        validators=[MinValueValidator(0), MaxValueValidator(5)]
    )
    
    class Meta:
        ordering = ['-created_at']

class AgentKnowledgeSource(models.Model):
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE, related_name='knowledge_sources')
    title = models.CharField(max_length=255)
    label = models.CharField(max_length=455, blank=True, null=True)
    source_type = models.CharField(max_length=50)  # document, video, audio, etc.
    content_hash = models.CharField(max_length=64)  # For deduplication
    processed_status = models.CharField(max_length=20)  # pending, processing, completed, failed
    vector_ids = models.JSONField(null=True)  # Store IDs of generated vectors
    created_at = models.DateTimeField(auto_now_add=True)

class AgentInteraction(models.Model):
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE, related_name='interactions')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='avatar_interactions')
    message = models.TextField() # may change it to Rich Text in the future
    response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    rating = models.IntegerField(null=True)
    feedback = models.TextField(null=True)
from django.db import models
from django.conf import settings

class ProductOrder(models.Model):
    """
    Model representing a product order placed by a user.
    """
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='orders',
        null=True, # Allow anonymous orders if needed, or enforce user
        blank=True
    )
    # Simplified product assumption: Just ordering "Gemstone Polishing Machine"
    product_name = models.CharField(max_length=255, default="Gemstone Polishing Machine") 
    quantity = models.PositiveIntegerField(default=1)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Order {self.id} - {self.product_name}"

class PolishingRequest(models.Model):
    """
    Model representing a request for gemstone polishing services.
    """
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='polishing_requests',
        null=True,
        blank=True
    )
    gem_type = models.CharField(max_length=100, help_text="Type of gemstone (e.g., Diamond, Ruby)")
    service_type = models.CharField(max_length=100, help_text="Type of polishing service required")
    pickup_location = models.CharField(max_length=255)
    delivery_location = models.CharField(max_length=255)
    notes = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Polishing Request {self.id} - {self.gem_type}"

class ContactMessage(models.Model):
    """
    Model representing a contact form submission.
    """
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name='contact_messages',
        null=True,
        blank=True
    )
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} at {self.timestamp}"

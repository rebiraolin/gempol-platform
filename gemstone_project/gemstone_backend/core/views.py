from rest_framework import generics, permissions
from django.core.mail import send_mail
from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .models import ProductOrder, PolishingRequest, ContactMessage
from .serializers import ProductOrderSerializer, PolishingRequestSerializer, ContactMessageSerializer

@method_decorator(csrf_exempt, name='dispatch')
class ProductOrderView(generics.CreateAPIView):
    """
    API View to create a new Product Order.
    POST /api/orders/
    """
    queryset = ProductOrder.objects.all()
    serializer_class = ProductOrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        """
        Save the order and send a confirmation email.
        """
        # Save with user (guaranteed by permission)
        instance = serializer.save(user=self.request.user)
        user_email = self.request.user.email
        
        # Validate email exists
        if not user_email:
            print(f"Warning: User {self.request.user.id} has no email address")
            return
        
        # Prepare detailed email content
        email_subject = f"Order Confirmation #{instance.id} - GEMPOL Polishing Machine"
        email_message = f"""
Dear {self.request.user.first_name or 'Customer'},

Thank you for your order!

Order Details:
--------------
Order ID: #{instance.id}
Product: GEMPOL Polishing Machine
Quantity: {instance.quantity}
Order Date: {instance.timestamp.strftime('%Y-%m-%d %H:%M:%S')}

Your order has been received and is being processed. We will contact you shortly with further details.

Best regards,
GEMPOL Team
        """.strip()
        
        # Send confirmation email with error handling
        try:
            send_mail(
                subject=email_subject,
                message=email_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user_email],
                fail_silently=False,
            )
            print(f"✓ Order confirmation email sent to {user_email}")
        except Exception as e:
            # Log error but don't crash the order creation
            print(f"✗ Email failed for order #{instance.id}: {e}")
            # In production, use proper logging: logger.error(f"Email failed: {e}")

@method_decorator(csrf_exempt, name='dispatch')
class PolishingRequestView(generics.CreateAPIView):
    """
    API View to submit a new Polishing Request.
    POST /api/services/
    """
    queryset = PolishingRequest.objects.all()
    serializer_class = PolishingRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        """
        Save the request and send a notification email.
        """
        instance = serializer.save(user=self.request.user)
        user_email = self.request.user.email
        
        # Validate email exists
        if not user_email:
            print(f"Warning: User {self.request.user.id} has no email address")
            return

        # Prepare detailed email content
        email_subject = f"GEMPOL Polishing Request Confirmation #{instance.id}"
        email_message = f"""
Dear {self.request.user.first_name or 'Customer'},

Your GEMPOL polishing request has been received!

Request Details:
----------------
Request ID: #{instance.id}
Gem Type: {instance.gem_type}
Service Type: {instance.service_type}
Pickup Location: {instance.pickup_location}
Delivery Location: {instance.delivery_location}
Request Date: {instance.timestamp.strftime('%Y-%m-%d %H:%M:%S')}

Additional Notes: {instance.notes or 'None'}

We will process your request and contact you shortly to confirm the pickup schedule.

Best regards,
GEMPOL Team
        """.strip()

        # Send notification email with error handling
        try:
            send_mail(
                subject=email_subject,
                message=email_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user_email],
                fail_silently=False,
            )
            print(f"✓ Polishing request confirmation email sent to {user_email}")
        except Exception as e:
            print(f"✗ Email failed for polishing request #{instance.id}: {e}")
            # In production, use proper logging: logger.error(f"Email failed: {e}")

@method_decorator(csrf_exempt, name='dispatch')
class ContactMessageView(generics.CreateAPIView):
    """
    API View to submit a Contact Message.
    POST /api/contact/
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        """
        Save the message and send a notification email.
        """
        # Save user if authenticated
        if self.request.user.is_authenticated:
            instance = serializer.save(user=self.request.user)
        else:
            instance = serializer.save()
        
        # Send notification email
        try:
            send_mail(
                subject=f"New Contact Message from {instance.name} [GEMPOL]",
                message=f"Message: {instance.message}\nEmail: {instance.email}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=["admin@gempol.test"], # Admin email
                fail_silently=False,
            )
        except Exception as e:
             print(f"Email failed: {e}")

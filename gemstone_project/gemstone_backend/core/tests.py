from django.test import TestCase
from django.core import mail
from django.contrib.auth import get_user_model
from core.models import ProductOrder, PolishingRequest

class EmailVerificationTest(TestCase):
    def setUp(self):
        User = get_user_model()
        self.user = User.objects.create_user(
            email='test@example.com', 
            password='password', 
            first_name='Test', 
            last_name='User'
        )
        self.client.force_login(self.user)

    def test_order_email(self):
        response = self.client.post('/api/orders/', {'quantity': 1})
        self.assertEqual(response.status_code, 201)
        
        # Verify email
        self.assertEqual(len(mail.outbox), 1)
        email = mail.outbox[0]
        self.assertIn('Order Confirmation', email.subject)
        self.assertIn('test@example.com', email.to)

    def test_polishing_request_email(self):
        mail.outbox = [] # Clear outbox
        response = self.client.post('/api/services/', {
            'gem_type': 'Ruby',
            'service_type': 'Polishing',
            'pickup_location': 'A',
            'delivery_location': 'B'
        })
        self.assertEqual(response.status_code, 201)
        
        # Verify email
        self.assertEqual(len(mail.outbox), 1)
        email = mail.outbox[0]
        self.assertIn('New Polishing Request', email.subject)
        self.assertIn('test@example.com', email.to)

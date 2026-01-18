from django.urls import path
from .views import ProductOrderView, PolishingRequestView, ContactMessageView

urlpatterns = [
    path('orders/', ProductOrderView.as_view(), name='product-orders'),
    path('services/', PolishingRequestView.as_view(), name='polishing-requests'),
    path('contact/', ContactMessageView.as_view(), name='contact-messages'),
]

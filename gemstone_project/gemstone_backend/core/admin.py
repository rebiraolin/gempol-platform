from django.contrib import admin
from .models import ProductOrder, PolishingRequest, ContactMessage

# This makes "Product Orders" appear on the main admin dashboard
@admin.register(ProductOrder)
class ProductOrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'product_name', 'quantity', 'timestamp']
    list_filter = ['timestamp']
    search_fields = ['user__email', 'product_name']

# This makes "Polishing Requests" appear on the main admin dashboard
@admin.register(PolishingRequest)
class PolishingRequestAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'gem_type', 'service_type', 'timestamp']
    list_filter = ['gem_type', 'service_type', 'timestamp']

# This makes "Contact Messages" appear on the main admin dashboard
@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'timestamp']
    readonly_fields = ['timestamp']
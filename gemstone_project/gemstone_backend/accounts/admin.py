from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User
from core.models import ProductOrder, PolishingRequest, ContactMessage

class ProductOrderInline(admin.TabularInline):
    model = ProductOrder
    extra = 0
    readonly_fields = ['product_name', 'quantity', 'timestamp']
    can_delete = False

class PolishingRequestInline(admin.TabularInline):
    model = PolishingRequest
    extra = 0
    readonly_fields = ['gem_type', 'service_type', 'pickup_location', 'delivery_location', 'notes', 'timestamp']
    can_delete = False

class ContactMessageInline(admin.TabularInline):
    model = ContactMessage
    extra = 0
    readonly_fields = ['name', 'email', 'message', 'timestamp']
    can_delete = False

# Register the User model in the admin
@admin.register(User)
class UserAdmin(BaseUserAdmin):
    """
    Admin configuration for the custom User model.
    """
    inlines = [ProductOrderInline, PolishingRequestInline, ContactMessageInline]
    ordering = ['email']
    list_display = ['email', 'first_name', 'last_name', 'is_staff']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password', 'first_name', 'last_name', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ['email', 'first_name', 'last_name']
    
# Remove username from readonly since we don't use it? 
# Actually BaseUserAdmin uses 'username' so we need to be careful.
# But since we defined fieldsets, it should be fine.

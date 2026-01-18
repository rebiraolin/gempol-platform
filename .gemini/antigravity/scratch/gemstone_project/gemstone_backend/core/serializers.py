from rest_framework import serializers
from .models import ProductOrder, PolishingRequest, ContactMessage

class ProductOrderSerializer(serializers.ModelSerializer):
    """
    Serializer for ProductOrder model.
    """
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = ProductOrder
        fields = '__all__'

class PolishingRequestSerializer(serializers.ModelSerializer):
    """
    Serializer for PolishingRequest model.
    """
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = PolishingRequest
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    """
    Serializer for ContactMessage model.
    """
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = ContactMessage
        fields = '__all__'

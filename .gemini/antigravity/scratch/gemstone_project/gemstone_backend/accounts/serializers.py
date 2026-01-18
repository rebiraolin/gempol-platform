from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for the custom User model.
    Exposes user details like email, first_name, and last_name.
    """
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']

class RegisterSerializer(serializers.ModelSerializer):
    """
    Serializer to handle user registration.
    Validates input and creates a new user instance.
    """
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'first_name', 'last_name']
    
    def create(self, validated_data):
        # Create user with encrypted password
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        return user

class LoginSerializer(serializers.Serializer):
    """
    Serializer to handle user login.
    Validates email and password credentials.
    """
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            # Authenticate user using the custom backend (email/password)
            user = authenticate(email=email, password=password)
            if user:
                if not user.is_active:
                    raise serializers.ValidationError("User account is disabled.")
                data['user'] = user
            else:
                raise serializers.ValidationError("Unable to log in with provided credentials.")
        else:
            raise serializers.ValidationError("Must include 'email' and 'password'.")
        return data

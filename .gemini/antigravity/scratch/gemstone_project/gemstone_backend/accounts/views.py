from rest_framework import generics, status, views, permissions
from rest_framework.response import Response
from django.contrib.auth import login
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer

@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(generics.CreateAPIView):
    """
    API View to register a new user.
    POST /api/auth/register/
    """
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "user": UserSerializer(user).data,
                "message": "User registered successfully."
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
@method_decorator(ensure_csrf_cookie, name='dispatch')
class LoginView(views.APIView):
    """
    API View to authenticate a user.
    POST /api/auth/login/
    """
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            login(request, user) # Logs the user in (creates session)
            return Response({
                "user": UserSerializer(user).data,
                "message": "Login successful."
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class LogoutView(views.APIView):
    """
    API View to log out a user.
    POST /api/auth/logout/
    """
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        from django.contrib.auth import logout
        logout(request)
        return Response({
            "message": "Logout successful."
        }, status=status.HTTP_200_OK)

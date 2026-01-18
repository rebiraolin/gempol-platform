"""
Custom authentication class that uses session authentication without CSRF enforcement.
This is suitable for API endpoints that are accessed from a separate frontend.
"""
from rest_framework.authentication import SessionAuthentication


class CsrfExemptSessionAuthentication(SessionAuthentication):
    """
    Session authentication without CSRF enforcement.
    Use this for API endpoints accessed from a separate frontend application.
    """
    def enforce_csrf(self, request):
        return  # Do not enforce CSRF

from rest_framework.throttling import SimpleRateThrottle

class WaitlistUserThrottle(SimpleRateThrottle):
    scope = 'waitlist_user'

    def get_cache_key(self, request, view):
        # Use the user's IP address for unauthenticated users
        if not request.user or not request.user.is_authenticated:
            return self.get_ident(request)

        # Use the user's unique identifier for authenticated users
        return f"throttle_{self.scope}_{request.user.pk}"
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users',UsersViewSets,basename='users')
urlpatterns = router.urls
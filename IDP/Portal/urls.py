from django.urls import path, include
from rest_framework import routers
from Portal.views import AssetViewSet

router=routers.DefaultRouter()
router.register('assets',AssetViewSet)

urlpatterns=[
    path('',include(router.urls)),
]
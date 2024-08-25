from django.shortcuts import render
from rest_framework import viewsets, permissions

from Portal.models import SoftwareAsset
from Portal.serializers import SoftwareAssetSerializer


# Create your views here.

class AssetViewSet(viewsets.ModelViewSet):
    queryset=SoftwareAsset.objects.all()
    serializer_class = SoftwareAssetSerializer
    permission_classes = [permissions.AllowAny]
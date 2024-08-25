from rest_framework import serializers

from Portal.models import SoftwareAsset


class SoftwareAssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = SoftwareAsset
        fields = '__all__'
        depth = 1
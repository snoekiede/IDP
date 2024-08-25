from django.db import models

# Create your models here.
class SoftwareAsset(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=200)
    description=models.TextField()
    version=models.CharField(max_length=50)

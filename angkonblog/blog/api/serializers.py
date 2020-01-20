from rest_framework import serializers
from blog.models import blog

#blog serializer
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = blog
        fields = '__all__'
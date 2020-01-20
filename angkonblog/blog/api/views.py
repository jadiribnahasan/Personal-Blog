from blog.models import blog
from rest_framework import generics, permissions
from .serializers import BlogSerializer

class BlogListApiView(generics.ListAPIView):
    queryset = blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [
        permissions.AllowAny
    ]


class BlogRetrieveUpdateDestroyApiView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BlogSerializer
    permission_classes = [
        permissions.AllowAny
    ]
    lookup_field = 'pk'

    #override method for partial update
    def put(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def get_queryset(self):
        return blog.objects.all()

class BlogCreateApiView(generics.CreateAPIView):
    serializer_class = BlogSerializer
    permission_classes = [
        permissions.AllowAny
    ]

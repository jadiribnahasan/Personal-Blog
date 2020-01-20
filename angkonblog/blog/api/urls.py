from django.urls import path, include
from .views import (BlogListApiView , BlogRetrieveUpdateDestroyApiView , BlogCreateApiView)

urlpatterns = [
    path('', BlogListApiView.as_view() , name='leads_api'),
    path('/create', BlogCreateApiView.as_view() , name='leads_create_api'),
    path('/<int:pk>', BlogRetrieveUpdateDestroyApiView.as_view() , name='leads_rud_api'),
]

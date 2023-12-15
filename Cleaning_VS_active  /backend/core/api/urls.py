from rest_framework.routers import DefaultRouter
from Forms.api.urls import post_router
from django.urls import path, include

router = DefaultRouter()
#posts

router.registry.extend(post_router.registry)


urlpatterns = [
    path('', include(router.urls))
]

#coments
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from portfolio import views


router = DefaultRouter()
router.register(r'projects', views.ProjectViewSet)
router.register(r'blogposts', views.BlogPostViewSet)
router.register(r'contact', views.ContactViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]

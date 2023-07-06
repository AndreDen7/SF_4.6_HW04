from django.urls import path
from rest_framework import routers

from . import views

api_router = routers.DefaultRouter()
api_router.register(r'recipes', views.RecipeViewSet)
api_router.register(r'categories', views.CategoryViewSet)

# urlpatterns = [
#     path('recipes/', views.RecipeList.as_view()),
#     path('recipes/<int:pk>/', views.RecipeDetail.as_view()),
#     path('categories/', views.CategoryList.as_view()),
#     path('categories/<int:pk>/', views.CategoryDetail.as_view()),
# ]

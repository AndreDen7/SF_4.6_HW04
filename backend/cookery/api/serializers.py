from rest_framework import serializers

from .models import Category, Recipe


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    recipes = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='recipe-detail')

    class Meta:
        model = Category
        fields = ['url', 'name', 'recipes']
        # fields = ['id', 'name', 'recipes']


class RecipeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Recipe
        fields = ['url', 'title', 'content', 'category', 'creation_date']


# class CategorySerializer(serializers.ModelSerializer):
#     recipes = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
#
#     class Meta:
#         model = Category
#         fields = ['id', 'name', 'recipes']
#
#
# class RecipeSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = Recipe
#         fields = ['id', 'title', 'content', 'category', 'creation_date']

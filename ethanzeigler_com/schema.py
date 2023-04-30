# # ethanzeigler_com/schema.py

# import graphene
# from graphene_django.types import DjangoObjectType
# from .models import MyModel

# class MyModelType(DjangoObjectType):
#     class Meta:
#         model = MyModel

# class Query(graphene.ObjectType):
#     my_model = graphene.Field(MyModelType)

#     def resolve_my_model(self, info):
#         return MyModel.objects.first()

# schema = graphene.Schema(query=Query)

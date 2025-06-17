from django.urls import path
from . import views

urlpatterns = [
    path("", views.hello_world, name="hello"),
    path("generate/<str:destination>/<int:days>/", views.generate, name="generate"),
    path("history/", views.history, name="history"),
    path("fetch/<int:id>/", views.fetch, name="fetch"),
]

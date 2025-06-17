from django.shortcuts import render, get_object_or_404
from django.core import serializers
from .llm import generate_itinerary
from .models import Itinerary

# Create your views here.
from django.http import HttpResponse, JsonResponse

def hello_world(request):
    return HttpResponse("Hello World")

def generate(request, destination, days):
    destination = destination.title()
    response = generate_itinerary(destination= destination, days= days)
    new_itinerary = Itinerary.objects.create(
        destination = destination,
        days = days,
        ai_response = response   
    )

    new_itinerary.save()
    return JsonResponse({ "message": new_itinerary.id}) # type: ignore

def history(request):
    all_itineraries=  Itinerary.objects.all().values(
        'id', 'destination', 'days', 'pub_date',
    )
    return JsonResponse({"message": list(all_itineraries)})

def fetch(request, id):
    itinerary = get_object_or_404(Itinerary, pk=id)
    data = {
        'id': itinerary.id, # type: ignore
        'destination': itinerary.destination,
        'days': itinerary.days,
        'pub_date': itinerary.pub_date.isoformat(),
        'ai_response': itinerary.ai_response
    }
    return JsonResponse({ "message" : data})

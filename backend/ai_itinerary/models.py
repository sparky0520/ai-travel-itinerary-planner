from django.db import models

# Create your models here.
class Itinerary(models.Model):
    destination = models.CharField(max_length=100)
    days = models.IntegerField()
    ai_response = models.CharField(null=True, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.destination} - {self.days} - {self.pub_date}"

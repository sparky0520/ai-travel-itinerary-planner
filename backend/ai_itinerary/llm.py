import os
import requests
from dotenv import load_dotenv

load_dotenv()

def generate_itinerary(destination, days):
    prompt = f"Create a {days}-day itinerary for {destination}, including activities and meal suggestions."
    api_key = os.getenv("LLM_API_KEY")

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        json={
            "model": "mistralai/mistral-7b-instruct",
            "messages": [{"role": "user", "content": prompt}]
        },
        timeout= 30,
    )
    data = response.json()
    return data["choices"][0]["message"]["content"]

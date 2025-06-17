# AI Itinerary Planner

## Overview

This app creates an AI generated itinerary for a destination and no. of days (duration) provided by the user. This is a full stack web app written in Django(backend) and ReactJS(frontend)

## Setup Instructions

- Clone the repo using `git clone https://github.com/sparky0520/ai-travel-itinerary-planner.git`
- Run the frontend by going into `frontend` directory and then `npm i && npm start`
- Run the backend by going into `backend` directory and then `pip install -r requirements.txt && python manage.py runserver`
- Make a `.env` file in the `backend` directory from the provided `.example.env`. Generate your openrouter api key from the docs `https://openrouter.ai/docs/quickstart`

## Improvements and observations

- Can add a useContext hook to create a global state, so that the history itineraries widget automatically refreshes to encorporate the newly formed itinery.
- Search functionality to search itineries by destination or by no. of days.

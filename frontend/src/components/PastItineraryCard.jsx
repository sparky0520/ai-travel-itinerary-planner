import React from "react";
import { Link } from "react-router-dom";

function PastItineraryCard({ itinerary }) {
  return (
    <Link to={`/${itinerary.id}`} className="text-blue-500">
      <div className="flex justify-between">
        <div>{itinerary.destination}</div>
        <div>{itinerary.days} days</div>
      </div>
      <div>{itinerary.pub_date}</div>
    </Link>
  );
}

export default PastItineraryCard;

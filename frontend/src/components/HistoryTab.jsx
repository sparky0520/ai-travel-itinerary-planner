import React, { useEffect, useState } from "react";
import PastItineraryCard from "./PastItineraryCard";
import axios from "axios";
import { Link } from "react-router-dom";

function HistoryTab({ styles }) {
  const [pastItineraries, setPastItineraries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // fetch past itineraries
    const fetchHistory = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/history/");
        setPastItineraries(response.data.message);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={styles} className="max-h-full overflow-y-scroll p-4">
      <Link to={"/"} className="text-2xl font-extrabold text-blue-800">
        Itineraries.io
      </Link>
      <div className="flex flex-col gap-6 mt-4">
        {/* Supposedly a search bar */}
        <div className="flex flex-col gap-2">
          <div className="text-xl">Search</div>
          <input
            className="border-[1px] rounded-md p-2"
            type="search"
            placeholder="In the works..."
          />
        </div>
        {pastItineraries.map((itinerary) => (
          <PastItineraryCard key={itinerary.id} itinerary={itinerary} />
        ))}
      </div>
    </div>
  );
}

export default HistoryTab;

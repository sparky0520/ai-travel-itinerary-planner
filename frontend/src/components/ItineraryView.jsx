import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItineraryView({ styles }) {
  const { id } = useParams();
  const [itinerary, setItinerary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // refetch itinerary when id changes
  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/fetch/${id}/`);
        setItinerary(response.data.message);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItinerary();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!itinerary) return <div>Itinerary not found.</div>;

  return (
    <div style={styles} className="max-h-full overflow-y-scroll p-12">
      <h2 className="text-3xl font-semibold">{`${itinerary.destination} (${itinerary.days} days)`}</h2>
      <p className="mt-2">Created: {itinerary.pub_date}</p>
      {itinerary.ai_response && (
        <p className="mt-8">
          {itinerary.ai_response.split(/(?=Day \d+:)/g).map((part, index) => {
            if (part.length > 0)
              return (
                <div
                  key={index}
                  className="mb-6 border rounded-xl shadow p-4 bg-white"
                >
                  <h2 className="text-xl font-bold text-blue-700 mb-2">
                    {part.split(":")[0]}
                  </h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {part.substring(part.indexOf(":") + 1).trim()}
                  </p>
                </div>
              );
          })}
        </p>
      )}
    </div>
  );
}

export default ItineraryView;

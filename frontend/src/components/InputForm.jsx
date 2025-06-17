import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function InputForm({ styles }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (destination.length > 100) {
      alert("Destination name should be less than 100 characters.");
      return;
    } else if (days > 15) {
      alert("No. of days should be less than or equal to 15.");
      return;
    }

    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/generate/${destination}/${days}/`
      );

      const id = response.data.message;
      navigate(`/${id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={styles} className="h-full flex justify-center items-center">
      <form className="flex flex-col gap-12 items-center">
        <div className="text-2xl">Generate a new itinerary</div>
        <div className="flex gap-6 items-center">
          <label htmlFor="destination">Destination</label>
          <input
            className="border-[1px] rounded-md p-2"
            type="text"
            id="destination"
            name="destination"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            minLength={2}
            maxLength={100}
          />
        </div>
        <div className="flex gap-6 items-center">
          <label htmlFor="days">No. of days</label>
          <input
            className="border-[1px] rounded-md p-2"
            type="number"
            id="days"
            name="days"
            placeholder="Enter no. of days"
            min={1}
            max={15}
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>
        <div className="flex gap-12">
          <button
            className="text-red-500"
            onClick={(e) => {
              e.preventDefault();
              setDestination("");
              setDays(1);
            }}
          >
            Reset
          </button>
          <button className="text-blue-500" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;

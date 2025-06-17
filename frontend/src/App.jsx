import { Routes, Route } from "react-router-dom";
import InputForm from "./components/InputForm";
import ItineraryView from "./components/ItineraryView";
import HistoryTab from "./components/HistoryTab";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <div className="flex h-full">
        <div className="w-1/3 border-r-2 border-blue-800">
          <HistoryTab styles={{}} />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<InputForm styles={{}} />} />
            <Route path="/:id" element={<ItineraryView styles={{}} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import CalendarGrid from "./components/CalendarGrid";

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="page-root">
      <div className="calendar-card" role="application" aria-label="Team Calendar">
        <h1 className="calendar-title">Team Calendar</h1>

        <CalendarHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />

        <CalendarGrid currentDate={currentDate} />
      </div>
    </div>
  );
}

import React from "react";
import { format, addMonths, subMonths } from "date-fns";

export default function CalendarHeader({ currentDate, setCurrentDate }) {
  return (
    <div className="cal-header">
      <button
        className="chev-btn"
        onClick={() => setCurrentDate(subMonths(currentDate, 1))}
        aria-label="Previous month"
      >
        ◀
      </button>

      <div className="month-label" aria-live="polite">
        {format(currentDate, "MMMM yyyy")}
      </div>

      <button
        className="chev-btn"
        onClick={() => setCurrentDate(addMonths(currentDate, 1))}
        aria-label="Next month"
      >
        ▶
      </button>
    </div>
  );
}

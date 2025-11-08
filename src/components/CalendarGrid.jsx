import React from "react";
import { isToday, isSameMonth, isSameDay, parseISO } from "date-fns";
import events from "../data/events.json";
import { generateDaysForMonth } from "../utils/dateUtils";
import EventBadge from "./EventBadge";

export default function CalendarGrid({ currentDate }) {
  const days = generateDaysForMonth(currentDate);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const VISIBLE_EVENT_COUNT = 2;

  return (
    <div className="calendar-wrap">
      <div className="weekday-row">
        {dayNames.map((d) => (
          <div key={d} className="weekday-cell">
            {d}
          </div>
        ))}
      </div>

      <div className="days-grid" role="grid">
        {days.map((day) => {
          const dayEvents = events.filter((e) => isSameDay(parseISO(e.date), day));
          const visibleEvents = dayEvents.slice(0, VISIBLE_EVENT_COUNT);
          const hiddenCount = Math.max(0, dayEvents.length - VISIBLE_EVENT_COUNT);

          const isThisMonth = isSameMonth(day, currentDate);
          const todayClass = isToday(day) ? "today-ring" : "";

          return (
            <div
              key={day.toISOString()}
              role="gridcell"
              className={`day-cell ${isThisMonth ? "" : "muted"} ${todayClass}`}
            >
              <div className="date-badge">{day.getDate()}</div>

              <div className="events-area">
                {visibleEvents.map((ev) => (
                  <EventBadge key={ev.id} event={ev} />
                ))}

                {hiddenCount > 0 && (
                  <div className="more-indicator" title={`${hiddenCount} more events`}>
                    +{hiddenCount} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

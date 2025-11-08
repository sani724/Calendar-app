import React from "react";

export default function EventBadge({ event }) {
  const style = { backgroundColor: event.color || "#1976d2" };

  return (
    <div
      className="event-badge"
      title={`${event.title} (${event.startTime} - ${event.endTime})`}
      style={style}
      aria-label={`${event.title} from ${event.startTime} to ${event.endTime}`}
    >
      <span className="event-text">{event.title}</span>
    </div>
  );
}

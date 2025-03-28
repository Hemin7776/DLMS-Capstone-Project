import React, { useState } from 'react';

const EventsSection = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Supplier Meeting",
      time: "2:00 PM, Today",
      description: "Discuss raw diamond supply chain and workforce requirements for the upcoming quarter.",
      expanded: false
    },
    {
      id: 2,
      title: "Inventory Check",
      time: "10:00 AM, Tomorrow",
      description: "Complete monthly inventory audit of diamond stock and update the catalog system.",
      expanded: false
    },
    {
      id: 3,
      title: "Team Training",
      time: "3:30 PM, Friday",
      description: "New certification training for all staff on diamond authentication procedures.",
      expanded: false
    }
  ]);

  const toggleExpand = (id) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, expanded: !event.expanded } : event
    ));
  };

  return (
    <div className="bg-white rounded-md p-4 mb-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-red-500">Upcoming Events</h3>
        <span className="text-sm text-gray-500">{events.length} events scheduled</span>
      </div>
      
      {events.map(event => (
        <div 
          key={event.id}
          className="bg-gray-50 p-3 rounded mb-2 cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => toggleExpand(event.id)}
        >
          <div className="flex justify-between items-center">
            <p className="font-medium">{event.title} - {event.time}</p>
            <button className="text-gray-400 hover:text-gray-600">
              {event.expanded ? '▲' : '▼'}
            </button>
          </div>
          
          {event.expanded && (
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EventsSection;
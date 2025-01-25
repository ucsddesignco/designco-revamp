'use client';

import './Events.scss';

import EventCard from '@/components/EventCard/EventCard';
import { EventsList } from './EventsList';

export default function EventSection() {
  // const handleButtonClick = (buttonNumber: number) => {
  //   setActive(buttonNumber);
  // };

  // const buttonClass = (buttonNumber: number) =>
  //   active === buttonNumber ? 'normal' : 'clicked';

  function formatDate(dateInt: number) {
    const dateStr = dateInt.toString();
    const year = parseInt(dateStr.slice(0, 4), 10);
    const month = parseInt(dateStr.slice(4, 6), 10) - 1; // Months are 0-indexed
    const day = parseInt(dateStr.slice(6), 10);

    const date = new Date(year, month, day);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  }

  EventsList.sort((a, b) => {
    if (a.date === b.date) return a.time < b.time ? 1 : -1;
    return a.date < b.date ? 1 : -1;
  });

  return (
    <div className="past-events">
      <h2>Past Events</h2>
      <div className="button-container">
        <button onClick={() => null} className="">
          GBMs/Socials
        </button>
        <button onClick={() => null} className="">
          Large-Scale Events
        </button>
      </div>
      <h3 className="year">2024-2025</h3>
      <div className="events-container">
        <h4>Events coming soon!</h4>
      </div>
      <h3 className="year">2023-2024</h3>
      <div className="events-container">
        {EventsList.map(item => (
          <EventCard
            key={item.title}
            event_title={item.title}
            imgLink={item.imageURL}
            event_link={item.link}
            date={formatDate(item.date)}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
}

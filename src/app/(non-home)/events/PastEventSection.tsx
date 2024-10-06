'use client';

import './Events.scss';
import { useState } from 'react';

import EventCard from '@/components/EventCard/EventCard';
import { EventsList } from './EventsList';

export default function EventSection() {
  const [active, setActive] = useState(0);

  const handleButtonClick = (buttonNumber: number) => {
    setActive(buttonNumber);
  };

  const buttonClass = (buttonNumber: number) =>
    active === buttonNumber ? 'normal' : 'clicked';

  return (
    <div className="past-events">
      <div className="button-container">
        <button
          style={{ display: 'inline-block' }}
          onClick={() => handleButtonClick(0)}
          className={buttonClass(0)}
        >
          <h4>GBMs/Socials</h4>
        </button>
        <button
          style={{ display: 'inline-block' }}
          onClick={() => handleButtonClick(1)}
          className={buttonClass(1)}
        >
          <h4>Large-Scale Events</h4>
        </button>
      </div>
      <h3>2024-2025</h3>
      <div className="events-container">
        <h4>Events coming soon!</h4>
      </div>
      <h3>2023-2024</h3>
      <div className="events-container">
        {EventsList.map(item => (
          <EventCard
            key={item.event_name}
            event_title={item.event_name}
            imgLink={item.imgLink}
            event_link={item.event_link}
            date={item.date}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
}

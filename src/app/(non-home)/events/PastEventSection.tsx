'use client';

import './Events.scss';
import { useState } from 'react';

import EventCard from '@/components/EventCard/EventCard';
import { EventsList } from './EventsList';

type EventFilter = 'GBMs/Socials' | 'Large-Scale Events';

export default function EventSection() {
  const [eventType, setEventType] = useState<EventFilter>('GBMs/Socials');

  // const handleButtonClick = (buttonNumber: number) => {
  //   setActive(buttonNumber);
  // };

  // const buttonClass = (buttonNumber: number) =>
  //   active === buttonNumber ? 'normal' : 'clicked';

  return (
    <div className="past-events">
      <div className="button-container">
        <button
          onClick={() => setEventType('GBMs/Socials')}
          className={eventType === 'GBMs/Socials' ? 'active' : ''}
        >
          GBMs/Socials
        </button>
        <button
          onClick={() => setEventType('Large-Scale Events')}
          className={eventType === 'Large-Scale Events' ? 'active' : ''}
        >
          Large-Scale Events
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

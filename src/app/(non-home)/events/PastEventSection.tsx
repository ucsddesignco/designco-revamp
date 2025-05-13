'use client';

import './Events.scss';

import { EventsList } from '@/(non-home)/events/EventsList';
import { LargeScaleEvents } from '@/(non-home)/events/LargeScaleEvents';

import EventAccordion from '@/components/EventAccordion/EventAccordion';
import { useState } from 'react';

export default function EventSection() {
  const [eventSource, setEventSource] = useState<'GBMs' | 'LargeScale'>('GBMs');

  return (
    <div className="past-events">
      <h2>Past Events</h2>
      <div className="button-container">
        <button
          onClick={() => setEventSource('GBMs')}
          className={eventSource === 'GBMs' ? 'active' : ''}
        >
          GBMs/Socials
        </button>
        <button
          onClick={() => setEventSource('LargeScale')}
          className={eventSource === 'LargeScale' ? 'active' : ''}
        >
          Large-Scale Events
        </button>
      </div>
      <EventAccordion events={EventsList} eventSource={eventSource} />
      <EventAccordion events={LargeScaleEvents} eventSource={eventSource} />
    </div>
  );
}

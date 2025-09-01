'use client';

import './Events.scss';

import { useState } from 'react';
import EventAccordion from '@/components/EventAccordion/EventAccordion';
import { LargeEvent, NormalEvent } from './types';

export type EventSource = 'GBMs' | 'LargeScale';

interface PastEventSectionProps {
  normalEvents: NormalEvent[];
  largeEvents: LargeEvent[];
}

export default function EventSection({
  normalEvents,
  largeEvents
}: PastEventSectionProps) {
  const [eventSource, setEventSource] = useState<EventSource>('GBMs');
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

      {eventSource === 'GBMs' ? (
        <EventAccordion
          events={normalEvents as NormalEvent[]}
          eventSource={eventSource}
        />
      ) : (
        <EventAccordion
          events={largeEvents as LargeEvent[]}
          eventSource={eventSource}
        />
      )}
    </div>
  );
}

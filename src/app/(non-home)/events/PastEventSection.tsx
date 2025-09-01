'use client';

import './Events.scss';

import { Suspense, use, useState } from 'react';
import { AllEventsPromise } from './page';
import EventAccordion from '@/components/EventAccordion/EventAccordion';
import { LargeEvent, NormalEvent } from './types';

export type EventSource = 'GBMs' | 'LargeScale';

interface PastEventSectionProps {
  allEventsPromise: any;
}

export default function EventSection({
  allEventsPromise
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

      <Suspense fallback={null}>
        <EventAccordionWrapper
          eventSource={eventSource}
          allEventsPromise={allEventsPromise}
        />
      </Suspense>
    </div>
  );
}

const EventAccordionWrapper = ({
  eventSource,
  allEventsPromise
}: {
  eventSource: EventSource;
  allEventsPromise: AllEventsPromise;
}) => {
  const { normalPromise, largePromise } = allEventsPromise;
  const normalEvents = use(normalPromise);
  const largeEvents = use(largePromise);
  return (
    <>
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
    </>
  );
};

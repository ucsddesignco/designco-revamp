/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';

import { EventsList } from '@/(non-home)/events/EventsList';
import EventCard from '@/components/EventCard/EventCard';

import { Accordion } from '@base-ui-components/react';

function PlusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 12 12" fill="currentcolor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}

/* date <= 20220804 */

export default function EventAccordion() {
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
    <div>
      <Accordion.Root className="Accordion" hiddenUntilFound>
        <Accordion.Item className="Item">
          <Accordion.Header className="Header">
            <Accordion.Trigger className="Trigger">
              2024-2025
              <PlusIcon className="TriggerIcon" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="Panel">
            <div className="Content">
              Base UI is a library of high-quality unstyled React components for
              design systems and web apps.
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="Item">
          <Accordion.Header className="Header">
            <Accordion.Trigger className="Trigger">
              2023-2024
              <PlusIcon className="TriggerIcon" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="Panel">
            <div className="Content">
              Head to the “Quick start” guide in the docs. If you’ve used
              unstyled libraries before, you’ll feel at home.
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="Item">
          <Accordion.Header className="Header">
            <Accordion.Trigger className="Trigger">
              Can I use it for my project?
              <PlusIcon className="TriggerIcon" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="Panel">
            <div className="Content">
              Of course! Base UI is free and open source.
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
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

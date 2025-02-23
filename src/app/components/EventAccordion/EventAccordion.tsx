/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';
import { Accordion } from 'radix-ui';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { EventItem } from '@/(non-home)/events/EventsList';
import EventCard from '@/components/EventCard/EventCard';

import './EventAccordion.scss';

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

type AccordionContentProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

AccordionContent.displayName = 'AccordionContent';

export default function EventAccordion({ events }: { events: EventItem[] }) {
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

  events.sort((a, b) => {
    if (a.date === b.date) return a.time < b.time ? 1 : -1;
    return a.date < b.date ? 1 : -1;
  });

  return (
    <Accordion.Root
      className="AccordionRoot"
      type="multiple"
      defaultValue={['item-1', 'item-2', 'item-3', 'item-4']}
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <AccordionTrigger>2024-2025</AccordionTrigger>
        <AccordionContent>
          <div className="events-container">
            {events.reduce<React.JSX.Element[]>((acc, item) => {
              if (item.date >= 20241002) {
                acc.push(
                  <EventCard
                    key={item.imageURL}
                    event_title={item.title}
                    imgLink={item.imageURL}
                    event_link={item.link}
                    date={formatDate(item.date)}
                    location={item.location}
                  />
                );
              }
              return acc;
            }, [])}
          </div>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-2">
        <AccordionTrigger>2023-2024</AccordionTrigger>
        <AccordionContent>
          <div className="events-container">
            {events.reduce<React.JSX.Element[]>((acc, item) => {
              if (item.date >= 20231004 && item.date <= 20240605) {
                acc.push(
                  <EventCard
                    key={item.imageURL}
                    event_title={item.title}
                    imgLink={item.imageURL}
                    event_link={item.link}
                    date={formatDate(item.date)}
                    location={item.location}
                  />
                );
              }
              return acc;
            }, [])}
          </div>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-3">
        <AccordionTrigger>2022-2023</AccordionTrigger>
        <Accordion.Content className="AccordionContent">
          <div className="events-container">
            {events.reduce<React.JSX.Element[]>((acc, item) => {
              if (item.date >= 20220928 && item.date <= 20230609) {
                acc.push(
                  <EventCard
                    key={item.imageURL}
                    event_title={item.title}
                    imgLink={item.imageURL}
                    event_link={item.link}
                    date={formatDate(item.date)}
                    location={item.location}
                  />
                );
              }
              return acc;
            }, [])}
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-4">
        <AccordionTrigger>Archive</AccordionTrigger>
        <Accordion.Content className="AccordionContent">
          <div className="events-container">
            {events.reduce<React.JSX.Element[]>((acc, item) => {
              if (item.date <= 20220804) {
                acc.push(
                  <EventCard
                    key={item.imageURL}
                    event_title={item.title}
                    imgLink={item.imageURL}
                    event_link={item.link}
                    date={formatDate(item.date)}
                    location={item.location}
                  />
                );
              }
              return acc;
            }, [])}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

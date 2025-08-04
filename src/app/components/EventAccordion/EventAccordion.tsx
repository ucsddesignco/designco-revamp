/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';
import { Accordion } from 'radix-ui';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { EventItem } from '@/(non-home)/events/EventsList';
import EventCard from '@/components/EventCard/EventCard';

import './EventAccordion.scss';
import { LargeScaleEventItem } from '@/(non-home)/events/LargeScaleEvents';
import LargeScaleEventCard from '../LargeScaleEventCard/LargeScaleEventCard';

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

export default function EventAccordion({
  events,
  eventSource
}: {
  events: EventItem[] | LargeScaleEventItem[];
  eventSource: string;
}) {
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

  // Sort events (most recent first by date + time)
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = typeof a.date === 'string' ? parseInt(a.date, 10) : a.date;
    const dateB = typeof b.date === 'string' ? parseInt(b.date, 10) : b.date;

    if (dateA === dateB) {
      const timeA = typeof a.time === 'number' ? a.time : 0;
      const timeB = typeof b.time === 'number' ? b.time : 0;
      return timeB - timeA;
    }

    return dateB - dateA;
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
            {eventSource === 'GBMs'
              ? sortedEvents.reduce<React.JSX.Element[]>((acc, item) => {
                  const dateInt =
                    typeof item.date === 'string'
                      ? parseInt(item.date, 10)
                      : item.date;

                  if (dateInt >= 20241002) {
                    acc.push(
                      <EventCard
                        key={item.imageURL}
                        event_title={item.title}
                        imgLink={item.imageURL}
                        event_link={item.link}
                        date={formatDate(dateInt)}
                        location={item.location ?? 'TBD'}
                      />
                    );
                  }

                  return acc;
                }, [])
              : sortedEvents
                  .slice()
                  .sort((a, b) => parseInt(b.image, 10) - parseInt(a.image, 10))
                  .reduce<React.JSX.Element[]>((acc, item) => {
                    const dateInt = parseInt(item.image, 10);

                    if (dateInt >= 20241002) {
                      acc.push(
                        <LargeScaleEventCard
                          key={item.imageURL}
                          event_title={item.title}
                          imgLink={item.imageURL}
                          event_link={item.link}
                          date={item.date}
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
            {eventSource === 'GBMs'
              ? sortedEvents.reduce<React.JSX.Element[]>((acc, item) => {
                  const dateInt =
                    typeof item.date === 'string'
                      ? parseInt(item.date, 10)
                      : item.date;

                  if (dateInt >= 20231004 && dateInt <= 20240702) {
                    acc.push(
                      <EventCard
                        key={item.imageURL}
                        event_title={item.title}
                        imgLink={item.imageURL}
                        event_link={item.link}
                        date={formatDate(dateInt)}
                        location={item.location ?? 'TBD'}
                      />
                    );
                  }
                  return acc;
                }, [])
              : sortedEvents
                  .slice()
                  .sort((a, b) => parseInt(b.image, 10) - parseInt(a.image, 10))
                  .reduce<React.JSX.Element[]>((acc, item) => {
                    const dateInt = parseInt(item.image, 10);

                    if (dateInt >= 20231004 && dateInt <= 20240702) {
                      acc.push(
                        <LargeScaleEventCard
                          key={item.imageURL}
                          event_title={item.title}
                          imgLink={item.imageURL}
                          event_link={item.link}
                          date={item.date}
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
            {eventSource === 'GBMs'
              ? sortedEvents.reduce<React.JSX.Element[]>((acc, item) => {
                  const dateInt =
                    typeof item.date === 'string'
                      ? parseInt(item.date, 10)
                      : item.date;

                  if (dateInt >= 20220928 && dateInt <= 20230702) {
                    acc.push(
                      <EventCard
                        key={item.imageURL}
                        event_title={item.title}
                        imgLink={item.imageURL}
                        event_link={item.link}
                        date={formatDate(dateInt)}
                        location={item.location ?? 'TBD'}
                      />
                    );
                  }
                  return acc;
                }, [])
              : sortedEvents
                  .slice()
                  .sort((a, b) => parseInt(b.image, 10) - parseInt(a.image, 10))
                  .reduce<React.JSX.Element[]>((acc, item) => {
                    const dateInt = parseInt(item.image, 10);

                    if (dateInt >= 20220928 && dateInt <= 20230702) {
                      acc.push(
                        <LargeScaleEventCard
                          key={item.imageURL}
                          event_title={item.title}
                          imgLink={item.imageURL}
                          event_link={item.link}
                          date={item.date}
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
            {eventSource === 'GBMs'
              ? sortedEvents.reduce<React.JSX.Element[]>((acc, item) => {
                  const dateInt =
                    typeof item.date === 'string'
                      ? parseInt(item.date, 10)
                      : item.date;

                  if (dateInt <= 20220804) {
                    acc.push(
                      <EventCard
                        key={item.imageURL}
                        event_title={item.title}
                        imgLink={item.imageURL}
                        event_link={item.link}
                        date={formatDate(dateInt)}
                        location={item.location ?? 'TBD'}
                      />
                    );
                  }
                  return acc;
                }, [])
              : sortedEvents
                  .slice()
                  .sort((a, b) => parseInt(b.image, 10) - parseInt(a.image, 10))
                  .reduce<React.JSX.Element[]>((acc, item) => {
                    const dateInt = parseInt(item.image, 10);

                    if (dateInt <= 20220804) {
                      acc.push(
                        <LargeScaleEventCard
                          key={item.imageURL}
                          event_title={item.title}
                          imgLink={item.imageURL}
                          event_link={item.link}
                          date={item.date}
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

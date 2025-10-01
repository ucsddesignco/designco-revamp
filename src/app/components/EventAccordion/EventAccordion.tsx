import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import EventCard from '@/components/EventCard/EventCard';

import './EventAccordion.scss';
import { LargeEvent, NormalEvent } from '@/(non-home)/events/types';
import {
  SectionBoundary,
  SectionStart,
  buildSectionBoundaries,
  formatDateFromInt,
  isDateInSection,
  toComparableDate
} from './utils';

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

type EventAccordionProps =
  | { eventSource: 'GBMs'; events: NormalEvent[] }
  | { eventSource: 'LargeScale'; events: LargeEvent[] };

export default function EventAccordion({
  events,
  eventSource
}: EventAccordionProps) {
  // Get comparable numeric date (yyyymmdd) for sorting/filtering
  const normalizeDate = (item: NormalEvent | LargeEvent): number => {
    return toComparableDate(item.date as unknown as number | string);
  };

  // Sort by date desc, then by time (GBMs only)
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = normalizeDate(a);
    const dateB = normalizeDate(b);
    if (dateA !== dateB) return dateB - dateA;
    if (eventSource === 'GBMs') {
      const timeA =
        typeof (a as NormalEvent).time === 'number'
          ? (a as NormalEvent).time
          : 0;
      const timeB =
        typeof (b as NormalEvent).time === 'number'
          ? (b as NormalEvent).time
          : 0;
      return timeB - timeA;
    }
    return 0;
  });

  // Define school year starts; end boundaries are derived from the next start
  const sectionStarts: SectionStart[] = [
    { id: 'item-0', title: '2025-2026', start: 20251001 },
    { id: 'item-1', title: '2024-2025', start: 20241002 },
    { id: 'item-2', title: '2023-2024', start: 20231004 },
    { id: 'item-3', title: '2022-2023', start: 20220928 }
  ];
  const derivedBoundaries = buildSectionBoundaries(sectionStarts);
  const archiveSection: SectionBoundary = {
    id: 'item-archive',
    title: 'Archive',
    start: 0,
    endExclusive: derivedBoundaries[derivedBoundaries.length - 1]?.start
  };
  const sections: SectionBoundary[] = [...derivedBoundaries, archiveSection];

  const NEW_IG_ASPECT_RATIO_DATE = 20251001;

  const renderEvent = (item: NormalEvent | LargeEvent) => {
    if (eventSource === 'GBMs') {
      const event = item as NormalEvent;
      const dateInt = toComparableDate(event.date);

      return (
        <EventCard
          key={event._id}
          variant="normal"
          title={event.title}
          image={event.image}
          link={event.link}
          date={formatDateFromInt(dateInt)}
          location={event.location}
          slides={event.slides}
          newAspectRatio={dateInt >= NEW_IG_ASPECT_RATIO_DATE ? true : false}
        />
      );
    }
    const event = item as LargeEvent;
    return (
      <EventCard
        key={event._id}
        variant="large"
        title={event.title}
        image={event.image}
        link={event.link}
        date={event.displayDate}
      />
    );
  };

  return (
    <Accordion.Root
      className="AccordionRoot"
      type="multiple"
      defaultValue={sections.map(s => s.id)}
    >
      {sections.map(section => (
        <Accordion.Item
          className="AccordionItem"
          value={section.id}
          key={section.id}
        >
          <AccordionTrigger>{section.title}</AccordionTrigger>
          <AccordionContent>
            <div className="events-container">
              {sortedEvents
                .filter(item => isDateInSection(normalizeDate(item), section))
                .map(item => renderEvent(item))}
            </div>
          </AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

'use client';

import Image from 'next/image';
import './EventCard.scss';

interface EventCardProps {
  event_title: string;
  imgLink: string;
  event_link: string;
  date: string;
  location: string;
}

export default function EventCard({
  event_title,
  imgLink,
  event_link,
  date,
  location
}: EventCardProps) {
  return (
    <div className="event-card">
      <div className="svg-container">
        <a href={event_link}>
          <Image
            src={imgLink}
            alt={'graphic for ' + { event_title }}
            width="250"
            height="250"
          />
        </a>
      </div>
      <div className="event-card-content">
        <h3>{event_title}</h3>
        <p>{date}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

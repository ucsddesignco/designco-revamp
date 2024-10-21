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
            className="event-image"
            src={imgLink}
            alt={`graphic for ${{ event_title }}`}
            width="500"
            height="500"
          />
        </a>
      </div>
      <div className="event-card-content">
        <div className="event-card-title">
          <h3>{event_title}</h3>
        </div>
        <div className="event-card-description">
          <p>{date}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

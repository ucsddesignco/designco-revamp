import Image from 'next/image';
import './EventCard.scss';
import { useState } from 'react';

type BaseEventCardProps = {
  title: string;
  image: string;
  link: string;
};

type NormalEventCardProps = BaseEventCardProps & {
  variant: 'normal';
  date: string;
  location: string;
  slides: string | null;
  newAspectRatio?: boolean;
};

type LargeEventCardProps = BaseEventCardProps & {
  variant: 'large';
  date: string | number;
};

type EventCardProps = NormalEventCardProps | LargeEventCardProps;

export default function EventCard(props: EventCardProps) {
  const [loaded, setLoaded] = useState(false);
  const { title, image, link } = props;
  const dateText = String(props.date);
  const isNormal = props.variant === 'normal';
  const isNewAspectRatio = isNormal && props.newAspectRatio;

  const getAspectRatio = () => {
    if (isNormal) {
      return isNewAspectRatio ? '4/5' : '1';
    }
    // Large events
    return '2';
  };
  return (
    <div className="event-card">
      <a
        href={link}
        style={{ aspectRatio: getAspectRatio() }}
        target="_blank"
        rel="noopener noreferrer"
        className={`event-image-container ${loaded ? 'loaded' : ''}`}
      >
        <Image
          className="event-image"
          src={image}
          alt={`graphic for ${title}`}
          width={isNewAspectRatio ? '400' : '500'}
          height={isNewAspectRatio ? '500' : '500'}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </a>
      <div className="event-card-content">
        <div className="event-card-title">
          <h3>{title}</h3>
        </div>
        <div className="event-card-description">
          <p>{dateText}</p>
          {isNormal && <p>{props.location}</p>}
        </div>
        <p className="event-card-slides">
          {isNormal && props.slides && (
            <a href={props.slides} target="_blank" rel="noopener noreferrer">
              SLIDES
            </a>
          )}
        </p>
      </div>
    </div>
  );
}

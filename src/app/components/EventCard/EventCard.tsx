import Image from 'next/image';
import './EventCard.scss';

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
};

type LargeEventCardProps = BaseEventCardProps & {
  variant: 'large';
  date: string | number;
};

type EventCardProps = NormalEventCardProps | LargeEventCardProps;

export default function EventCard(props: EventCardProps) {
  const { title, image, link } = props;
  const dateText = String(props.date);
  const anchorProps =
    props.variant === 'normal'
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

  return (
    <div className="event-card">
      <div className="svg-container">
        <a href={link} {...anchorProps}>
          {/* Unoptimized because of Netlify issue that doesn't cache the images */}
          <Image
            className="event-image"
            src={image}
            alt={`graphic for ${title}`}
            width="500"
            height="500"
            unoptimized
          />
        </a>
      </div>
      <div className="event-card-content">
        <div className="event-card-title">
          <h3>{title}</h3>
        </div>
        <div className="event-card-description">
          <p>{dateText}</p>
          {props.variant === 'normal' && <p>{props.location}</p>}
        </div>
        <p className="event-card-slides">
          {props.variant === 'normal' && props.slides && (
            <a href={props.slides} target="_blank" rel="noopener noreferrer">
              SLIDES
            </a>
          )}
        </p>
      </div>
    </div>
  );
}

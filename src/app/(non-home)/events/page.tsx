import './Events.scss';
//import Button from '@/components/Button/Button';

import EventCard from '@/components/EventCard/EventCard';
import { EventsList } from './EventsList';

export default function Events() {
  return (
    <main className="events_page">
      <h1>
        Build your design skills and connect with fellow designers at our
        workshops, socials, and large-scale events.
      </h1>
      <h2>Past Events</h2>
      {/*<Button
        text="GBMs/Socials"
        link="/about"
        ariaLabel="Learn more about Design Co's history, board and more!"
        bgColor="black"
        color="white"
  />*/}
      <h3>2023-2024</h3>
      <div className="events-container">
        {EventsList.map(item => (
          <EventCard
            key={item.event_name}
            event_title={item.event_name}
            imgLink={item.imgLink}
            event_link={item.event_link}
            date={item.date}
            location={item.location}
          />
        ))}
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Events | Design Co'
};

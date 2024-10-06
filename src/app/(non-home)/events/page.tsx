import './Events.scss';

import PastEventSection from './PastEventSection';
import UpcomingEvent from './UpcomingEvent';

export default function Events() {
  return (
    <main className="events_page">
      <h1>
        Build your design skills and connect with fellow designers at our
        workshops, socials, and large-scale events.
      </h1>
      <UpcomingEvent />
      <h2>Past Events</h2>
      <PastEventSection />
    </main>
  );
}

export const metadata = {
  title: 'Events | Design Co'
};

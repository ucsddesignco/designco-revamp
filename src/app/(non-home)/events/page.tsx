import client from '@/lib/mongodb';
import './Events.scss';

import PastEventSection from './PastEventSection';

export interface AllEventsPromise {
  normalPromise: Promise<
    {
      _id: string;
    }[]
  >;
  largePromise: Promise<
    {
      _id: string;
    }[]
  >;
}

export default async function Events() {
  const db = client.db('DCo-Events');
  const normalCollection = db.collection('events');
  const largeCollection = db.collection('large-events');
  const normalEventsPromise = normalCollection
    .find()
    .toArray()
    .then(docs =>
      docs.map(doc => ({
        ...doc,
        _id: doc._id.toString()
      }))
    );

  const largeEventsPromise = largeCollection
    .find()
    .toArray()
    .then(docs =>
      docs.map(doc => ({
        ...doc,
        _id: doc._id.toString()
      }))
    );

  const allEventsPromise = {
    normalPromise: normalEventsPromise,
    largePromise: largeEventsPromise
  };
  return (
    <main className="events_page">
      <h1>
        Build your design skills and connect with fellow designers at our
        workshops, socials, and large-scale events.
      </h1>
      <PastEventSection allEventsPromise={allEventsPromise} />
    </main>
  );
}

export const metadata = {
  title: 'Events | Design Co'
};

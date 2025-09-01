import client from '@/lib/mongodb';
import './Events.scss';

import PastEventSection from './PastEventSection';
import { LargeEvent, NormalEvent } from './types';
import { serializeDocs } from '@/lib/serializeDocs';

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
  const normalCollection = db.collection<NormalEvent>('events');
  const largeCollection = db.collection<LargeEvent>('large-events');
  const normalEventsPromise = normalCollection.find().toArray();

  const largeEventsPromise = largeCollection.find().toArray();

  const [normalEvents, largeEvents] = await Promise.all([
    normalEventsPromise,
    largeEventsPromise
  ]);

  return (
    <main className="events_page">
      <h1>
        Build your design skills and connect with fellow designers at our
        workshops, socials, and large-scale events.
      </h1>
      <PastEventSection
        normalEvents={serializeDocs<NormalEvent>(normalEvents)}
        largeEvents={serializeDocs<LargeEvent>(largeEvents)}
      />
    </main>
  );
}

export const metadata = {
  title: 'Events | Design Co'
};

'use client';

import './Events.scss';

import EventAccordion from '@/components/EventAccordion/EventAccordion';

export default function EventSection() {
  // const handleButtonClick = (buttonNumber: number) => {
  //   setActive(buttonNumber);
  // };

  // const buttonClass = (buttonNumber: number) =>
  //   active === buttonNumber ? 'normal' : 'clicked';

  return (
    <div className="past-events">
      <h2>Past Events</h2>
      <div className="button-container">
        <button onClick={() => null} className="">
          GBMs/Socials
        </button>
        <button onClick={() => null} className="">
          Large-Scale Events
        </button>
      </div>
      <EventAccordion />
    </div>
  );
}

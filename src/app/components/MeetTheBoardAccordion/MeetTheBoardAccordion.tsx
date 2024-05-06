'use client';

import * as Accordion from '@radix-ui/react-accordion';
import './MeetTheBoardAccordion.scss';
import { BOARD_MEMBER_LIST } from './constants';
import Image from 'next/image';

export default function MeetTheBoardAccordion() {
  return (
    <div className="meet_the_board">
      <h2>Meet the Board</h2>
      <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {BOARD_MEMBER_LIST.map(role => (
          <Accordion.Item
            className="AccordionItem"
            value={role.title}
            key={role.title}
          >
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className="AccordionTrigger">
                {role.title}
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M14 8H8L8 14H6L6 8H0L0 6H6V0L8 0V6L14 6V8Z"
                    fill="currentColor"
                  />
                </svg>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="member__container">
                {role.members.map(member => (
                  <div className="member" key={member.id}>
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        data-loaded="false"
                        onLoad={e => {
                          e.currentTarget.setAttribute('data-loaded', 'true');
                        }}
                        src={member.img}
                        fill={true}
                        alt={member.name}
                        className="member_img"
                        quality={100}
                      />
                    </a>
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                    <p className="gradyear">{member.gradYear}</p>
                  </div>
                ))}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

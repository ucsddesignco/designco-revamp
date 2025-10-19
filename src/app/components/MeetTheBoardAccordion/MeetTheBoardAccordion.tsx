'use client';

import * as Accordion from '@radix-ui/react-accordion';
import './MeetTheBoardAccordion.scss';
import Image from 'next/image';
import { BoardMember } from '@/(non-home)/about/page';

const ROLE_TITLES: Record<string, string> = {
  CEC: 'Community Engagement',
  Creative: 'Creative',
  IR: 'Industry Relations',
  Ops: 'Operations',
  Marketing: 'Marketing'
};

const ROLE_ORDER = ['CEC', 'Creative', 'IR', 'Ops', 'Marketing'];

const CREATIVE_ROLE_ORDER = [
  'Director of Creative',
  'Visual + Brand Designer',
  'Lead Software Developer',
  'Software Developer'
];

const MARKETING_ROLE_ORDER = [
  'Director of Marketing',
  'Content Writer',
  'Media Coordinator',
  'Social Media Coordinator'
];

function sortMembersWithinRole(
  members: BoardMember[],
  role: string
): BoardMember[] {
  if (role === 'Creative') {
    // Special sorting for Creative role
    const sorted: BoardMember[] = [];

    CREATIVE_ROLE_ORDER.forEach(roleTitle => {
      const membersWithRole = members
        .filter(member => member.roleTitle === roleTitle)
        .sort((a, b) => a.name.localeCompare(b.name));
      sorted.push(...membersWithRole);
    });

    return sorted;
  } else if (role === 'Marketing') {
    // Special sorting for Marketing role
    const sorted: BoardMember[] = [];

    MARKETING_ROLE_ORDER.forEach(roleTitle => {
      const membersWithRole = members
        .filter(member => member.roleTitle === roleTitle)
        .sort((a, b) => a.name.localeCompare(b.name));
      sorted.push(...membersWithRole);
    });

    return sorted;
  } else {
    // General sorting: Directors first, then rest alphabetically by name
    const directors = members
      .filter(member => member.roleTitle.includes('Director'))
      .sort((a, b) => a.name.localeCompare(b.name));

    const others = members
      .filter(member => !member.roleTitle.includes('Director'))
      .sort((a, b) => a.name.localeCompare(b.name));

    return [...directors, ...others];
  }
}

export default function MeetTheBoardAccordion({
  boardMembers
}: {
  boardMembers: BoardMember[];
}) {
  const groupedMembers = ROLE_ORDER.reduce(
    (acc, role) => {
      const membersInRole = boardMembers.filter(member => member.role === role);
      if (membersInRole.length > 0) {
        acc.push({
          role,
          title: ROLE_TITLES[role],
          members: sortMembersWithinRole(membersInRole, role)
        });
      }
      return acc;
    },
    [] as { role: string; title: string; members: BoardMember[] }[]
  );

  return (
    <div className="meet_the_board">
      <h2>Meet the Board</h2>
      <Accordion.Root className="AccordionRoot" type="single" collapsible>
        {groupedMembers.map(roleGroup => (
          <Accordion.Item
            className="AccordionItem"
            value={roleGroup.title}
            key={roleGroup.title}
          >
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className="AccordionTrigger">
                <span>{roleGroup.title}</span>
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
              <div className="member-container">
                {roleGroup.members.map(member => (
                  <div className="member" key={member.name}>
                    <a
                      href={member.personalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        data-loaded="false"
                        onLoad={e => {
                          e.currentTarget.setAttribute('data-loaded', 'true');
                        }}
                        src={member.image}
                        width={300}
                        height={450}
                        alt={member.name}
                        className="member_img"
                        quality={100}
                      />
                    </a>
                    <h3>{member.name}</h3>
                    <p className="role">{member.roleTitle}</p>
                    <p className="gradYear">{member.gradYear}</p>
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

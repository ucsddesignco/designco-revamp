export const faq: faq[] = [
  {
    id: 1,
    question: 'What is Design Co Board?',
    answer:
      'Design Co Board is a team of student leaders who ideate, plan, and execute events and professional growth opportunities for the UCSD design community.'
  },
  {
    id: 2,
    question: 'How long is the role period?',
    answer:
      'If selected, you will be serving in your role, on the Design Co Board for the entirety of the Spring 2025 quarter and the 2025-26 school year (4 quarters total).'
  },
  /* {
    question: "I won't be living near campus this year, can I still apply?",
    answer:
      "Worry not! Although we have moved back to in-person events recently and would prefer for you to be physically present for Design Co events and meetings, we will work to accommodate people who live abroad.",
  }, */
  {
    id: 3,
    question: 'When is the application due?',
    answer: 'Applications are due Sunday, January 19th at 11:59PM.'
  },
  {
    id: 4,
    question: 'I&apos;m interested in multiple roles, what should I do?',
    answer:
      "While our board is made up of people who wear multiple hats, we believe that you should be committed and passionate about the role(s) you are applying to. &lt;b style='font-weight: 900'&gt;Because of that you may apply to 3 roles maximum&lt;/b&gt;."
  },
  {
    id: 5,
    question: 'What is the application & interview process like?',
    answer:
      'Our board will review all applications thoroughly and holistically. All applicants will be updated on the status of their application by Monday 1/27 (Week 3) latest. If you&apos;re a good fit for one or some of the roles, our team will reach out to you via email to set up an interview. Interviews will take place between Monday 2/3 - Friday 2/7 (Week 5) over Zoom, and some roles will require a design challenge. Offers will be sent out shortly after.'
  },
  {
    id: 6,
    question:
      'If I become a board member, what will my responsibilities look like?',
    answer:
      'Full details on your responsibilities are outlined in the role descriptions above. At a minimum, all board members are expected to attend 1 weekly board meeting (~1.5 hours) and weekly GBMs (~2 hours). Your role responsibilities should give you an additional 2-3 hours (this varies) of work per week, including team meetings (1 hour).'
  },
  {
    id: 7,
    question: 'How do board members collaborate together?',
    answer:
      'We&apos;re split into five highly cross-functional and collaborative teams. Now that&apos;s a lot of corporate jargon, what does that mean? It&apos;s easier for us to explain through the lens of planning an event. &lt;br/&gt;&lt;br/&gt;\
    \
    Let&apos;s say Design Co wants to set up a huge recruiting session with multiple industry partners. &lt;br/&gt;&lt;br/&gt;\
    &lt;ol&gt; \
    &lt;li&gt; Our industry relations team will be tasked with finding the industry partners and managing communications. They then communicate everything industry partners want/need to the community team, creative team, and marketing. &lt;/li&gt;\
    &lt;li&gt; Our community team works with the community to figure out what students actually want. What they want to learn, what they want to hear, see, do. This may involve surveying our community on Discord, crafting the actual day-of experience etc. &lt;/li&gt;\
    &lt;li&gt; Our operations team is involved with the logistics of the recruiting session, which includes budgeting for the event, booking event spaces etc. They will be in contact with all the teams to ensure our event caters towards our growing community and runs smoothly. &lt;/li&gt;\
    &lt;li&gt; The designers on the creative team create all the visual and brand collateral for the event. From digital to print, they do all of the pixel pushing. &lt;/li&gt;\
    &lt;li&gt; The developers on the creative team will build a website for the event, and update it when needed. &lt;/li&gt \
    &lt;li&gt; Finally the marketing team uses social media, emailing, ads, posters and a ton of other tactics to ensure that you and all your friends know about the event and want to come out. This is how we collaborate at a high level, but it changes from day to day. &lt;/li&gt; &lt;/li&gt;&lt;br/&gt;\
    &lt;/ol&gt; \
    If you want us to get into more specifics, we meet weekly to chat, we use Google Drive to organize things, and Slack message each other. And yes, we have a ton of cool custom reactions, and we&apos;ll make one for you too if you join ;) &lt;br/&gt;&lt;br/&gt;\
    \
    While you&apos;ll be serving in your role, all our board members wear multiple hats, and get the opportunities to try new things and learn. We hope that this allows you to grow as designers, professionals, and humans.'
  },
  {
    id: 8,
    question: 'I&apos;m not getting paid, so what&apos;s in it for me?',
    answer:
      'We&apos;re going to keep it real. You&apos;re signing up for extra work, and extra stress, and you&apos;re not going to be paid. So why should you do this? To start, not a single member of our board regrets ever joining our board. People have grown and learned so much, beyond design, during their time on our board. We&apos;re all a family and push each other to become better versions of ourselves every day. So if you&apos;re passionate about helping the design community at UCSD grow, submit an application, we&apos;d love to have you aboard (no pun intended).'
  }
];

interface faq {
  id: number;
  question: string;
  answer: string;
}

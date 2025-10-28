export const roles: Role[] = [
  {
    team: 'Community',
    position: 'Community Engagement Coordinator',
    description:
      'You are sociable and motivated. You are excited to help Design Co grow as a pre-professional organization and better support student designers. At Design Co, we believe that fostering an inclusive design community means collaborating with others and growing with everyone.',
    duty: '&lt;ol&gt; &lt;li&gt; Facilitating community engagement programs for students, such as Pixels & Cursors &lt;/li&gt; \
      &lt;li&gt; Working with our team to plan and execute large scale events  &lt;/li&gt; \
      &lt;li&gt; Ideating, planning, and coordinating social events that engage the design community  &lt;/li&gt;\
      &lt;li&gt; Facilitating large scale board social events/activities such as board retreat &lt;/li&gt; &lt;/ol&gt;',
    general:
      '&lt;ol&gt; &lt;li&gt; Take the initiative to prepare and lead one or more GBMs per quarter, either on your own, or in collaboration with another board member or others in the design community &lt;/li&gt; \
      &lt;li&gt; Attend weekly GBMs, board meetings, large scale events, and other Industry Relations Team functions (~7 to 10 hours per week) &lt;/li&gt; \
      &lt;li&gt; Serve as a student leader within the design community at UC San Diego &lt;/li&gt; &lt;/ol&gt;',
    offer:
      '&lt;ol&gt; &lt;li&gt; Prior experience with event planning &lt;/li&gt; \
      &lt;li&gt; Organization skills and the ability to stay on top of deadlines &lt;/li&gt; \
      &lt;li&gt; Awesome and innovative ice breaker and social ideas &lt;/li&gt; \
      &lt;li&gt; Knowledge of design thinking and the human-centered design process &lt;/li&gt; &lt;/ol&gt;',
    ec: '&lt;ol&gt; &lt;li&gt; Proficient knowledge in managing large scale Discord servers &lt;/li&gt; \
      &lt;li&gt; Prior experience with large scale event planning (100+ attendees) &lt;/li&gt; \
      &lt;li&gt; Prior experience creating mentorship programs &lt;/li&gt; \
      &lt;li&gt; Prior experience working with multiple partners, departments, and student organizations across UC San Diego and the greater San Diego community &lt;/li&gt; \
      &lt;li&gt; Relevant design experience in a professional setting &lt;/li&gt; \
      &lt;li&gt; Knowledge of the design recruiting and job search process &lt;/li&gt; \
      &lt;li&gt; Knowing funny jokes, can teach sick dance moves, and have great food or music recommendations &lt;/li&gt; &lt;/ol&gt;'
  },
  {
    team: 'Creative',
    position: 'Web Developer',
    description:
      'You are fascinated with pushing pixels to code. You are always up for a challenge. You aspire to push the boundaries of your own skills to build amazing digital experiences for our design community.',
    duty: '&lt;ol&gt; &lt;li&gt; Building and maintaining all Design Co websites (e.g. ucsddesign.co, Design Frontiers, Build Up, Stride, VDA, etc) &lt;/li&gt; \
      &lt;li&gt; Work closely with our visual designers to bring their visions to life (aka implementing Figma mockups and cool interactions) &lt;/li&gt; &lt;/ol&gt;',
    general:
      '&lt;ol&gt; &lt;li&gt; Take the initiative to prepare and lead one or more GBMs per quarter, either on your own, or in collaboration with another board member or others in the design community &lt;/li&gt; \
      &lt;li&gt; Attend weekly GBMs, board meetings, large scale events, and other Industry Relations Team functions (~7 to 10 hours per week) &lt;/li&gt; \
      &lt;li&gt; Serve as a student leader within the design community at UC San Diego &lt;/li&gt; &lt;/ol&gt;',
    offer:
      '&lt;ol&gt; &lt;li&gt; Fluent in basic front-end web development technologies such as HTML/CSS/JavaScript &lt;/li&gt; \
      &lt;li&gt; Prior experience with responsive web design &lt;/li&gt; \
      &lt;li&gt; Ability to take mockups and turn them into beautiful web pages &lt;/li&gt; \
      &lt;li&gt; Ability to stay on top of deadlines and work quickly when needed &lt;/li&gt; \
      &lt;li&gt; Portfolio or Github showing relevant web design projects &lt;/li&gt; &lt;/ol&gt;',
    ec: '&lt;ol&gt; &lt;li&gt; Experience with front-end frameworks + tools (e.g. React, Sass, etc.) &lt;/li&gt; \
      &lt;li&gt; Interest in a UX Engineering or Design Technologist Role &lt;/li&gt; \
      &lt;li&gt; Experience with back-end development and APIs &lt;/li&gt; \
      &lt;li&gt; Prior web development experience in a professional setting &lt;/li&gt; \
      &lt;li&gt; Knowledge of visual design and UX best practices &lt;/li&gt; \
      &lt;li&gt; Knowledge of design thinking and the human-centered design process &lt;/li&gt; \
      &lt;li&gt; Interest in data and analytics &lt;/li&gt; \
      &lt;li&gt; Knowing funny jokes, can teach sick dance moves, and have great food or music recommendations  &lt;/li&gt; &lt;/ol&gt;'
  }
];

interface Role {
  team: string;
  position: string;
  description: string;
  duty: string;
  general: string;
  offer: string;
  ec: string;
}

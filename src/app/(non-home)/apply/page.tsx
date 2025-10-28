import './Apply.scss';

import FAQAccordion from '@/components/ApplyPage/FAQAccordion/FAQAccordion';

import { roles } from '@/components/ApplyPage/roles';

export default function Apply() {
  const roleList = roles.map(item => item.duty);

  return (
    <main id="apply-page">
      <div>
        <p className="steps">1st</p>
        <div className="stepCopy">
          <h1>We&apos;re cool people.</h1>
          <p>
            Like you, we&apos;re aspiring designers. We&apos;re the ones who
            plan GBMs, Stride, Build Up, Design Frontiers, and all that other
            cool stuff. At the end of the day we&apos;re tired and our necks are
            sore from pushing pixels, but we&apos;re students, we&apos;re happy,
            and we&apos;re a family.
          </p>
        </div>
      </div>
      <div>
        <p className="steps">2nd</p>
        <div className="stepCopy">
          <h1>You&apos;ll get to create impact.</h1>
          <p>
            You&apos;ll get the chance to take part in the planning of 35+
            events each school year. From a career fair to design sprints, to
            general workshops and talks, you&apos;ll have the chance to get your
            hands dirty and do some cool stuff for your design community.
          </p>
        </div>
      </div>
      <div>
        <p className="steps">3rd</p>
        <div className="stepCopy">
          <h1>You&apos;ll grow (figuratively).</h1>
          <p>
            You&apos;ll get exposed to so many unique opportunities and
            challenges. Our board is constantly exploring new things, sharing
            ideas, and experimenting. We fail together and grow together, so
            come along with us for the journey!
          </p>
        </div>
      </div>
      <div className="innerContainer">
        <h1>Open Roles</h1>
        {roleList}
      </div>
      <div className="innerContainer">
        <div id="faq">
          <div className="container">
            <h1>In case you&apos;re wondering (FAQs)</h1>
            <FAQAccordion />
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Apply | Design Co'
};

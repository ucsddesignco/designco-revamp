import './CommunityHero.scss';

export default function CommunityHero() {
  return (
    <section id="community-hero">
      <h1 className="hero-text">
        We are the{' '}
        <span id="creatives-text" className="community-hero-text">
          creatives,
        </span>{' '}
        the{' '}
        <span
          id="affordance-text-desktop"
          className="community-hero-text community-desktop-text"
        >
          affordance-finders,
        </span>
        <span
          id="affordance-text-mobile"
          className="community-hero-text community-mobile-text"
        >
          affordance
        </span>
        <span
          id="finders-text-mobile"
          className="community-hero-text community-mobile-text"
        >
          ‑finders,
        </span>{' '}
        and the next wave of{' '}
        <span
          id="problem-text-desktop"
          className="community-hero-text community-desktop-text"
        >
          problem‑solvers
        </span>{' '}
        <span
          id="problem-text-mobile"
          className="community-hero-text community-mobile-text"
        >
          problem
        </span>
        <span
          id="solvers-text-mobile"
          className="community-hero-text community-mobile-text"
        >
          -solvers,
        </span>{' '}
        – we are designers from UCSD.
      </h1>
    </section>
  );
}

import ImageCarousel from '@/components/ImageCarousel/ImageCarousel';
import './About.scss';
import Button from '@/components/Button/Button';
import MeetTheBoardAccordion from '@/components/MeetTheBoardAccordion/MeetTheBoardAccordion';
import Image from 'next/image';

export default function About() {
  return (
    <main className="about_page">
      <h1>
        {`We started in a tiny classroom in 2012. Now we're a growing community of
        over 300 designers.`}
      </h1>
      <ImageCarousel />
      <ul className="faq_container">
        <li>
          <h2>What is Design Co?</h2>
          <p>
            Design Co is a pre-professional student organization at UC San Diego
            that bridges the gap between designers and industry. Our mission is
            to cultivate a space that fosters opportunity and growth as an
            inclusive community of designers.
          </p>
          <p>
            {`Check us out on social media or find us on campus to see what new
            things we have coming up soon! :)`}
          </p>
        </li>
        <li>
          <h2>What does the “Co” in Design Co mean?</h2>
          <p>
            The “Co” means Community, Collective, and Collaborative, which is
            everything we stand for. We believe that fostering an inclusive
            design community means collaborating with others and growing with
            everyone.
          </p>
          <Button
            noShadow={true}
            text="Join Our Commununity"
            link="community"
            bgColor="white"
            color="black"
            borderColor="black"
            style={{ fontSize: '14px' }}
          />
        </li>
        <li>
          <h2>So what do you have for me?</h2>
          <p>
            {` By combining workshops, events, and other career growth
            opportunities, we’re tackling the challenges of breaking into
            industry head-on and building a strong design community while we're
            at it. And yes, it includes you too.`}
          </p>
        </li>
        <li>
          <h2>{`I’m sold — how do I join?`}</h2>
          <p>
            Anyone can be a member of our community. We host events weekly, on
            Wednesdays at 6:30pm at the Design & Innovation Building Room 208.
            Sometimes things change, so we suggest following our{' '}
            <a
              href="https://www.instagram.com/ucsddesignco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram page
            </a>{' '}
            or{' '}
            <a
              href="https://www.facebook.com/ucsddesignco"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook page
            </a>{' '}
            to stay up-to-date.
          </p>
        </li>
      </ul>
      <MeetTheBoardAccordion />
      <section className="spotify">
        <h2>What our board is listening to</h2>
        <div className="spotify_container">
          <div className="left">
            <h3>Board Bopz Spotify Playlist</h3>
            <a
              href="https://open.spotify.com/playlist/5OTpI667X3PLcCNKJJIZeN?si=ebf21c7e1e9a4231"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen Now
            </a>
          </div>
          <div className="right">
            <Image
              className="walkman"
              src="/images/About/walkman.png"
              height={320}
              width={816}
              quality={100}
              // fill
              style={{ width: '100%', objectFit: 'contain', height: 'auto' }}
              alt="Design Co Walkman"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'About | Design Co'
};

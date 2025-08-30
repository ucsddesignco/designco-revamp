import './Home.scss';
import Button from '@/components/Button/Button';

import { cookies } from 'next/headers';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import {
  BACKGROUND_IMAGES,
  COLORS,
  COMPANIES_LIST,
  NEWS_LIST
} from './constants';

export default async function Home() {
  // Used to cycle through color themes
  const prevItem: number = cookies().has('prevItem')
    ? parseInt(cookies().get('prevItem')!.value, 10)
    : 0;

  const item = prevItem % COLORS.length;

  const baseColor = COLORS[item][0];
  const bgColor = COLORS[item][1];
  const bgImage = BACKGROUND_IMAGES[item];

  const splashStyle = {
    backgroundColor: bgColor,
    color: baseColor,
    zIndex: 0
  };

  return (
    <>
      <Navbar color={baseColor} bgColor={bgColor} />
      <main className="home_page">
        <section className="hero" style={splashStyle}>
          <Image
            src={bgImage}
            alt="Hero image of a plant"
            fill
            className="hero_img"
            quality={100}
            priority
          />
          <div className="hero__inner">
            <h1>Grow with our community of student designers.</h1>
            <p>
              {`We're a strong and scrappy design community at UC San Diego,
              bridging the gap between young designers and industry. Previously
              known as Design at UCSD.`}
            </p>
            <Button
              text="Learn More"
              link="/about"
              ariaLabel="Learn more about Design Co's history, board and more!"
              bgColor={baseColor}
              color={bgColor}
              hasShadow
            />
          </div>
        </section>

        <section className="main_content">
          <div className="events_news_container">
            <div className="content content_events">
              <h2>Upcoming Events</h2>
              <p>Keep an eye out for Spring quarter updates!</p>
              <Button link="/events" text="View All Events" />
            </div>
            <div className="content content_news">
              <h2>News</h2>
              <ul>
                {NEWS_LIST.map(news => (
                  <li key={news.title}>
                    <h3>{news.title}</h3>
                    <p>{news.description}</p>
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read the full article for ${news.title}`}
                    >
                      Read More
                    </a>
                    <p className="date">{news.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="companies">
            <h2>Our community has gone on to work at</h2>
            <ul>
              {COMPANIES_LIST.map(company => (
                <li key={company.name}>
                  <Image
                    src={company.img}
                    width={540}
                    height={276}
                    alt={`${company.name} Company Logo`}
                  />
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}

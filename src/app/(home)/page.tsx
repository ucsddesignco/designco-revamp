import './Home.scss';
import Button from '@/components/Button/Button';

import { cookies } from 'next/headers';
import {
  BACKGROUND_IMAGES,
  COLORS,
  COMPANIES_LIST,
  NEWS_LIST
} from './constants';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';

export default async function Home() {
  let item: number;

  // Retrieve prev item
  let prevItem: number = cookies().has('prevItem')
    ? parseInt(cookies().get('prevItem')!.value)
    : 0;

  item = ++prevItem % COLORS.length;

  let baseColor = COLORS[item][0];
  let bgColor = COLORS[item][1];
  let bgImage = BACKGROUND_IMAGES[item];

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
            src={bgImage.src}
            alt="Hero image of a plant"
            fill
            className="hero_img"
            quality={100}
            priority
          />
          <div className="hero__inner">
            <h1>Grow with our community of student designers.</h1>
            <p>
              We’re a strong and scrappy design community at UC San Diego,
              bridging the gap between young designers and industry. Previously
              known as Design at UCSD.
            </p>
            <Button
              text="Learn More"
              link="/about"
              ariaLabel="Learn more about Design Co's history, board and more!"
              bgColor={baseColor}
              color={bgColor}
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
                {NEWS_LIST.map((news, index) => {
                  return (
                    <li key={index}>
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
                  );
                })}
              </ul>
            </div>
          </div>

          <section className="companies">
            <h2>Our community has gone on to work at</h2>
            <ul>
              {COMPANIES_LIST.map((company, index) => {
                return (
                  <li key={index}>
                    <Image
                      src={company.img}
                      alt={`${company.name} Company Logo`}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}

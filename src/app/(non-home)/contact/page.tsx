import Button from '@/components/Button/Button';
import './Contact.scss';

export default function Contact() {
  const links = [
    {
      href: 'https://www.facebook.com/ucsddesignco',
      text: 'Facebook',
      handle: '/ucsddesignco'
    },
    {
      href: 'https://www.instagram.com/ucsddesignco/',
      text: 'Instagram',
      handle: '@ucsddesignco'
    },
    {
      href: 'https://www.linkedin.com/company/ucsddesignco/',
      text: 'Linkedin',
      handle: '/ucsddesignco'
    },
    {
      href: 'mailto:designatucsd@gmail.com',
      text: 'Email',
      handle: 'designatucsd@gmail.com'
    },
    {
      href: 'https://discord.gg/jpzznvhX3x',
      text: 'Discord',
      handle: '/ucsddesignco'
    },
    {
      href: 'https://www.youtube.com/channel/UCJ175UUZ7d2u5qWmvMHp8ow',
      text: 'Youtube',
      handle: '/ucsddesignco'
    }
  ];

  return (
    <main className="contact_page">
      <section className="social_media">
        <h1>Get in touch with us:</h1>
        <ul className="social_media_links">
          {links.map(link => (
            <li key={link.text}>
              <a
                href={link.href}
                key={link.text}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="link_text">
                  {link.text}
                  <svg
                    viewBox="0 0 38 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </a>
              <p>{link.handle}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="campus">
        <h2>Or find us on campus:</h2>
        <h3>The Design Lab</h3>
        <p>
          Design and Innovation Building <br />
          Innovation and Lyman Lane
          <br />
          Warren College
          <br />
          UC San Diego
          <br />
          La Jolla, CA 92093
        </p>
        <Button text="Map me" link="https://goo.gl/maps/WyeMqAixhBtiTfAHA" />
      </section>
    </main>
  );
}

export const metadata = {
  title: 'Contact | Design Co'
};

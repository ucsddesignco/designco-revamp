import Button from '@/components/Button/Button';
import './CommunityCTA.scss';

type CommunityCTAProps = {
  title: string;
  paragraph: string;
  link: string;
  buttonText: string;
  newTab?: boolean;
};

export default function CommunityCTA({
  title,
  paragraph,
  link,
  buttonText,
  newTab = true
}: CommunityCTAProps) {
  return (
    <section className="community_CTA">
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <Button
        link={link}
        text={buttonText}
        borderColor="white"
        bgColor="var(--community-bg-color)"
        newTab={newTab}
      />
    </section>
  );
}

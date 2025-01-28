import CommunityCTA from '../CommunityCTA/CommunityCTA';
import RedPlantSVG from '@/components/CommunityPage/community-assets/red-plant.svg';
import './CommunityFeedback.scss';
import Image from 'next/image';
import Sticker from '@/components/Sticker/Sticker';

type CommunityFeedbackProps = {
  handleStickerDrag: () => void;
};

export default function CommunityFeedback({
  handleStickerDrag
}: CommunityFeedbackProps) {
  return (
    <div id="community_feedback">
      <CommunityCTA
        title="Have feedback for us?"
        paragraph=" Introducing our anonymous, open feedback form that you can fill out
          at any time of the year. Let us know how we can improve your Design
          Co experience!"
        buttonText="Share Feedback"
        link="https://forms.gle/4YjxjCWBxV1u5WW9A"
      />
      <div id="community-feedback-sticker">
        <Sticker
          onStart={handleStickerDrag}
          style={{ top: '0%', left: '-4rem', rotate: '-16deg' }}
        >
          <Image
            src={RedPlantSVG}
            alt="Red plant sticker"
            height={221}
            width={101}
          />
        </Sticker>
      </div>
    </div>
  );
}

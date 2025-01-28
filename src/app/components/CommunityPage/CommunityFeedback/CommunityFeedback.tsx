import './CommunityFeedback.scss';
import Sticker from '@/components/Sticker/Sticker';
import DCOPlant from '@/components/ColorStickers/DCOPlant';
import CommunityCTA from '../CommunityCTA/CommunityCTA';

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
      <Sticker
        onStart={handleStickerDrag}
        style={{ top: '0%', left: '-4rem', rotate: '-16deg' }}
        className="community-feedback-sticker-desktop"
      >
        <DCOPlant color="orange" />
      </Sticker>
      <Sticker
        onStart={handleStickerDrag}
        style={{ top: '-25%', right: '-2rem', scale: '0.8' }}
        className="community-feedback-sticker-mobile"
      >
        <DCOPlant color="green" />
      </Sticker>
    </div>
  );
}

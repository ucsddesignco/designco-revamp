import './CommunityDiscord.scss';
import Sticker from '@/components/Sticker/Sticker';
import DCOLogo from '@/components/ColorStickers/DCOLogo';
import Smiley from '@/components/ColorStickers/Smiley';
import CommunityCTA from '../CommunityCTA/CommunityCTA';

type CommunityDiscordProps = {
  handleStickerDrag: () => void;
};

export default function CommunityDiscord({
  handleStickerDrag
}: CommunityDiscordProps) {
  return (
    <section style={{ position: 'relative' }}>
      <CommunityCTA
        title="Join Our Discord"
        paragraph="Chat with other designers, get advice on classes to take, or find a
              buddy to go with to your next DCo event!"
        buttonText="Discord Invite"
        link="https://discord.gg/jpzznvhX3x"
      />
      <Sticker
        className="community-discord-sticker-mobile"
        onStart={handleStickerDrag}
        style={{ top: '-1rem', right: '-1rem' }}
      >
        <Smiley color="blue" style={{ scale: 0.5 }} />
      </Sticker>
      <Sticker
        className="community-discord-sticker-desktop"
        onStart={handleStickerDrag}
        style={{ top: '21%', right: '-4%' }}
      >
        <DCOLogo color="blue" />
      </Sticker>
    </section>
  );
}

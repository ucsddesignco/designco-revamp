import CommunityCTA from '../CommunityCTA/CommunityCTA';
import BlueSmileySVG from '@/components/CommunityPage/community-assets/blue-smiley.svg';
import DCOStickerSVG from '@/components/CommunityPage/community-assets/dco-sticker.svg';
import './CommunityDiscord.scss';
import Image from 'next/image';
import Sticker from '@/components/Sticker/Sticker';

type CommunityDiscordProps = {
  handleStickerDrag: () => void;
};

export default function CommunityDiscord({
  handleStickerDrag
}: CommunityDiscordProps) {
  return (
    <div style={{ position: 'relative' }}>
      <CommunityCTA
        title="Join Our Discord"
        paragraph="Chat with other designers, get advice on classes to take, or find a
              buddy to go with to your next DCo event!"
        buttonText="Discord Invite"
        link="https://discord.gg/jpzznvhX3x"
      />
      <div id="community-discord-sticker-mobile">
        <Sticker
          onStart={handleStickerDrag}
          style={{ top: '-1rem', right: '0' }}
        >
          <Image
            src={BlueSmileySVG}
            alt="Blue smiley face sticker"
            height={70}
            width={70}
          />
        </Sticker>
      </div>
      <div id="community-discord-sticker-desktop">
        <Sticker
          onStart={handleStickerDrag}
          style={{ top: '21%', right: '-4%' }}
        >
          <Image
            src={DCOStickerSVG}
            alt="Blue Design Co sticker"
            height={133}
            width={124}
          />
        </Sticker>
      </div>
    </div>
  );
}

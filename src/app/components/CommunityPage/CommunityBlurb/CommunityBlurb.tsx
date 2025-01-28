'use client';

import Button from '@/components/Button/Button';
import './CommunityBlurb.scss';
import BlueSmileySVG from '../community-assets/blue-smiley.svg';
import GreenSmileySVG from '../community-assets/green-smiley.svg';
import OrangeSmileySVG from '../community-assets/orange-smiley.svg';
import GreenPlantSVG from '../community-assets/green-plant.svg';
import MoveMeSVG from '../community-assets/move-me-arrow.svg';
import Image from 'next/image';
import Sticker from '@/components/Sticker/Sticker';

type CommunityBlurbProps = {
  hasDragged: boolean;
  handleStickerDrag: () => void;
};

export default function CommunityBlurb({
  hasDragged,
  handleStickerDrag
}: CommunityBlurbProps) {
  return (
    <section className="community_blurb">
      <div className="community_blurb__section">
        <h3>Community Page</h3>
        <p>
          Connect with a wide network of student designers and alumni from
          Design Co! It’s like LinkedIn, but exclusively for our UCSD community.
        </p>
        <Button
          link="https://community.ucsddesign.co/"
          text="Meet the Community"
          bgColor="white"
          color="var(--community-bg-color)"
        />
      </div>
      <div className="community_blurb__section">
        <h3>DCO: Pixels & Cursors</h3>
        <p>
          Grow your design network and blossom new friendships with our social
          mentorship program, Pixels & Cursors! Applications are closed for this
          quarter, but check back in our next cycle.
        </p>
      </div>
      {!hasDragged && (
        <div id="sticker-move-me" style={{ top: '2.5rem', right: '6.5rem' }}>
          <Image
            src={MoveMeSVG}
            width={36}
            height={63}
            alt="Curvy arrow"
            priority
            aria-hidden
          />
          <p>MOVE ME!</p>
        </div>
      )}
      <div className="community-stickers__desktop">
        <Sticker
          onStart={handleStickerDrag}
          style={{ top: '3rem', right: '3rem' }}
        >
          <Image
            src={BlueSmileySVG}
            alt="Blue smiley face sticker"
            height={137}
            width={137}
            priority
          />
        </Sticker>
        <Sticker
          onStart={handleStickerDrag}
          style={{ top: '-4.5rem', right: '-4.5rem' }}
        >
          <Image
            src={GreenPlantSVG}
            alt="Green plant sticker"
            height={200}
            width={105}
            priority
          />
        </Sticker>
      </div>

      <div className="community-stickers__mobile">
        <Sticker
          onStart={handleStickerDrag}
          style={{ left: '32%', top: '3.5rem' }}
        >
          <Image
            src={OrangeSmileySVG}
            alt="Orange smiley face sticker"
            height={70}
            width={70}
            priority
          />
        </Sticker>
        <Sticker
          onStart={handleStickerDrag}
          style={{ left: '50%', top: '1rem' }}
        >
          <Image
            src={GreenSmileySVG}
            alt="Green smiley face sticker"
            height={70}
            width={70}
            priority
          />
        </Sticker>
      </div>
    </section>
  );
}

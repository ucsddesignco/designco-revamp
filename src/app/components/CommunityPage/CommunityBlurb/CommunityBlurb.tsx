'use client';

import Button from '@/components/Button/Button';
import './CommunityBlurb.scss';
import Image from 'next/image';
import Sticker from '@/components/Sticker/Sticker';
import DCOPlant from '@/components/ColorStickers/DCOPlant';
import Smiley from '@/components/ColorStickers/Smiley';
import MoveMeSVG from '../community-assets/move-me-arrow.svg';

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
      {/* Desktop Stickers */}
      <Sticker
        onStart={handleStickerDrag}
        style={{ top: '3rem', right: '3rem' }}
        className="community-stickers__desktop"
      >
        <Smiley color="blue" />
      </Sticker>
      <Sticker
        onStart={handleStickerDrag}
        style={{ top: '-4.5rem', right: '-4.5rem' }}
        className="community-stickers__desktop"
      >
        <DCOPlant color="green" />
      </Sticker>

      {/* Mobile Stickers */}
      <Sticker
        onStart={handleStickerDrag}
        style={{ left: '25%', top: '1.5rem' }}
        className="community-stickers__mobile"
      >
        <Smiley color="orange" style={{ scale: 0.5 }} />
      </Sticker>
      <Sticker
        onStart={handleStickerDrag}
        style={{ left: '45%', top: '-1rem' }}
        className="community-stickers__mobile"
      >
        <Smiley color="green" variation="1" style={{ scale: 0.5 }} />
      </Sticker>
    </section>
  );
}

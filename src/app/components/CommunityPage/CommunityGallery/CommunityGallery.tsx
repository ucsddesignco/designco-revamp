import Image from 'next/image';
import './CommunityGallery.scss';
import OrangeSmileySVG from '../community-assets/orange-smiley.svg';
import GreenSmileySVG from '../community-assets/green-smiley.svg';
import DCOStickerSVG from '../community-assets/dco-sticker.svg';
import Sticker from '@/components/Sticker/Sticker';

type CommunityGalleryProps = {
  handleStickerDrag: () => void;
};

export default function CommunityGallery({
  handleStickerDrag
}: CommunityGalleryProps) {
  return (
    <section className="community_gallery">
      <h2>View Our Community</h2>
      <div id="community-gallery-sticker">
        <Sticker
          onStart={handleStickerDrag}
          style={{ left: '-3rem', top: '-2rem' }}
        >
          <Image
            src={OrangeSmileySVG}
            alt="Orange smiley face sticker"
            height={120}
            width={120}
            draggable={false}
          />
        </Sticker>

        <Sticker
          onStart={handleStickerDrag}
          style={{ left: '6%', top: '-6.5rem' }}
        >
          <Image
            src={GreenSmileySVG}
            alt="Green smiley face sticker"
            height={120}
            width={120}
            draggable={false}
          />
        </Sticker>

        <Sticker
          onStart={handleStickerDrag}
          style={{ top: '40%', left: '-2rem' }}
        >
          <Image
            src={DCOStickerSVG}
            alt="DCO Logo sticker"
            height={100}
            width={100}
            draggable={false}
          />
        </Sticker>
      </div>

      <div className="community_gallery_container">
        <Image
          className="community-gallery-image"
          src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1668148923/community-gallery/PCReveal_knr0d0.jpg"
          alt="Pixels and Cursors Reveal 2023"
          width={12285}
          height={3216}
        />
        <div className="community-gallery-bento">
          <div className="community-gallery-bento-left">
            <div>
              <Image
                className="community-gallery-image"
                src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745909/community-gallery/community-1_pptbud.jpg"
                alt="Design Co Workshop"
                width={6000}
                height={4000}
              />
            </div>
            <div>
              <Image
                className="community-gallery-image"
                src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745891/community-gallery/community-2_sqfykd.jpg"
                alt="Design Co Panel Event"
                width={6000}
                height={4000}
              />
            </div>
          </div>
          <div className="community-gallery-bento-right">
            <div>
              <Image
                className="community-gallery-image"
                src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745881/community-gallery/community-3_htsucv.jpg"
                alt="Design Co Design Frontiers"
                width={4000}
                height={6000}
              />
            </div>

            <div>
              <Image
                className="community-gallery-image"
                src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745895/community-gallery/community-4_v22iql.jpg"
                alt="Design Co Design Frontiers"
                width={6000}
                height={4000}
              />
            </div>
          </div>
        </div>

        <div className="community-gallery-side-by-side">
          <div>
            <Image
              className="community-gallery-image"
              src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745886/community-gallery/community-5_aufqgk.jpg"
              alt="Design Co Workshop"
              width={3761}
              height={2507}
            />
          </div>
          <div>
            <Image
              className="community-gallery-image"
              src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745922/community-gallery/community-6_by1nrw.jpg"
              alt="Design Co Social at UTC"
              width={5278}
              height={3519}
            />
          </div>
        </div>
        <Image
          className="community-gallery-image"
          src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745666/community-gallery/community-7_z5zw4w.png"
          alt="Design Co Ice Skating Social"
          width={3600}
          height={1624}
        />
        <div className="community-gallery-bento">
          <div className="community-gallery-bento-left">
            <div>
              <Image
                className="community-gallery-image"
                src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745647/community-gallery/community-8_nbfz9a.jpg"
                alt="Design Co Workshop"
                width={5472}
                height={3648}
              />
            </div>
            <div>
              <Image
                className="community-gallery-image"
                src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745648/community-gallery/community-9_qdem8d.jpg"
                alt="Design Co Workshop"
                width={6016}
                height={4016}
              />
            </div>
          </div>
          <div className="community-gallery-bento-right">
            <div>
              <Image
                className="community-gallery-image"
                src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745670/community-gallery/community-10_bfnm5x.jpg"
                alt="Design Co Social at UTC"
                width={4000}
                height={6000}
              />
            </div>
            <div>
              <Image
                className="community-gallery-image"
                src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745916/community-gallery/community-11_mbsef2.jpg"
                alt="Design Co Panel Event"
                width={3936}
                height={2624}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

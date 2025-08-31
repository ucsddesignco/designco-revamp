'use client';

import { useState } from 'react';
import CommunityHero from '../CommunityHero/CommunityHero';
import CommunityBlurb from '../CommunityBlurb/CommunityBlurb';
import CommunityGallery from '../CommunityGallery/CommunityGallery';
import CommunityFeedback from '../CommunityFeedback/CommunityFeedback';
import CommunityDiscord from '../CommunityDiscord/CommunityDiscord';

export default function CommunityContainer() {
  const [hasDragged, setHasDragged] = useState(false);

  const handleStickerDrag = () => {
    if (!hasDragged) {
      setHasDragged(true);
    }
  };
  return (
    <div className="community_container">
      <CommunityHero />
      <CommunityBlurb
        hasDragged={hasDragged}
        handleStickerDrag={handleStickerDrag}
      />
      <CommunityDiscord handleStickerDrag={handleStickerDrag} />
      <CommunityGallery handleStickerDrag={handleStickerDrag} />
      <CommunityFeedback handleStickerDrag={handleStickerDrag} />
    </div>
  );
}

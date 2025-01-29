import './Community.scss';

import CommunityContainer from '@/components/CommunityPage/CommunityContainer/CommunityContainer';

export default function Community() {
  return (
    <main id="community_page">
      {/* This component exists because client components cannot export metadata which is necessary for page title */}
      <CommunityContainer />
    </main>
  );
}

export const metadata = {
  title: 'Community | Design Co'
};

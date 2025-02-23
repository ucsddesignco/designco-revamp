export type EventItem = {
  title: string;
  link: string;
  image: string;
  date: number;
  time: number;
  location: string;
  slidelink?: string;
  videolink?: string;
  description?: string;
  imageURL: string;
  year?: number;
};

export const EventsList: EventItem[] = [
  {
    title: 'Fall Kickoff - Intro to Design',
    link: 'https://www.instagram.com/p/CF3HxwKnQWH/?igshid=YmMyMTA2M2Y=',
    image: '20201008',
    date: 20201008,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1YyOCvDqtAAnsRqBm8kM7UXTvJ5HRc0Y4/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true/',
    videolink:
      'https://drive.google.com/file/d/17z1XLRi-Oxl72Yqf6V_-VZDLSAS4OwD6/view?usp=sharing/',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039088/designco/events/xgbuqeb9gc1romnnyvll.webp'
  },
  {
    title: 'Game Night Social',
    link: 'https://www.instagram.com/p/CGJFv1VnGz8/?igshid=YmMyMTA2M2Y=',
    image: '20201015',
    date: 20201015,
    time: 1700,
    location: 'Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039088/designco/events/l10fvtlgmfqrrbczhhff.webp'
  },
  {
    title: 'Intern Panel',
    link: 'https://www.instagram.com/p/CGi88jknfAo/?igshid=YmMyMTA2M2Y=',
    image: '20201022',
    date: 20201022,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1Hl_f0UIn9DDNpixheLGnu-DFag4_KD5m/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    videolink:
      'https://drive.google.com/file/d/1s3VDtUe3VYuI7xZuQ-popRkcEhJudqzB/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039090/designco/events/kghfiz0csyfyokvh1qhw.webp'
  },
  {
    title: 'Scary Movie Social',
    link: 'https://www.instagram.com/p/CG0-ju0BxiS/?igshid=YmMyMTA2M2Y=',
    image: '20201029',
    date: 20201029,
    time: 1700,
    location: 'Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039089/designco/events/u1vhvsowr2mzbhbxyt6m.webp'
  },
  {
    title: 'Resume Workshop',
    link: 'https://www.instagram.com/p/CHHADPgBFQu/?igshid=YmMyMTA2M2Y=',
    image: '20201105',
    date: 20201105,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1icEjb40SxUrqYkFmcODwU-mpGm-SVo-1/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039089/designco/events/ousdxijzhrwixhq01s5g.webp'
  },
  {
    title: 'Speed Friending Social + Design Buds Reveal',
    link: 'https://www.instagram.com/p/CHT2TM4BrO0/?igshid=YmMyMTA2M2Y=',
    image: '20201112',
    date: 20201112,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1rRW1nAfEcJoKXsJAQALIERBvmBQVdymT/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039089/designco/events/ovw4gmf9dlzic0aid8cg.webp'
  },
  {
    title: 'Camp DCo Pt. 1 – User Research',
    link: 'https://www.instagram.com/p/CHbrsSsg8-e/?igshid=YmMyMTA2M2Y=',
    image: '20201117',
    date: 20201117,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1XW15x5QTe7NwMYt-0zMwgy91J5Z5ADNp/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    videolink:
      'https://drive.google.com/file/d/1xNjVLgrCXMbdooKHJeJYMl26Uk1lS8iD/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039088/designco/events/rsvrh9fjztuluz3gznj5.webp'
  },
  {
    title: 'Camp DCo Pt. 2 – Wireframing + Visual/Brand Design',
    link: 'https://www.instagram.com/p/CHbrsSsg8-e/?igshid=YmMyMTA2M2Y=',
    image: '20201119',
    date: 20201119,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1e1S_8mzfIZtGSkoadgdtFOsWwgJcuQns/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    videolink:
      'https://drive.google.com/file/d/1eKUKydkrGcO8xRSYv12QyAeP0uTZgjJj/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039089/designco/events/utc9hhlzyxbr5z4xki9x.webp'
  },
  {
    title: 'Unwrapping the Online Interview Process',
    link: 'https://www.instagram.com/p/CIPGU9AM-Iu/?igshid=YmMyMTA2M2Y=',
    image: '20201203',
    date: 20201203,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1kuXDZMp9fp-Fu-I2rCW63Q8vIvzipioY/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    videolink:
      'https://drive.google.com/file/d/1Em13qCzPBGKahRZcdkj2v9jK3sJvpNIg/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039089/designco/events/gphqtxdkutqwbfwwjszj.webp'
  },
  {
    title: 'End of Quarter Celebration',
    link: 'https://www.instagram.com/p/CIhZ856DBFl/?igshid=YmMyMTA2M2Y=',
    image: '20201210',
    date: 20201210,
    time: 1700,
    location: 'Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039088/designco/events/cwdlwqixu7axmamqroti.webp'
  },
  {
    title: 'Crafting Your Taste',
    link: 'https://www.instagram.com/p/CJpOJGqM22l/?igshid=YmMyMTA2M2Y=',
    image: '20210114',
    date: 20210114,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/161TwmRoCU9FWLTYBjqobwZTNonmfbjA2/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    videolink:
      'https://drive.google.com/file/d/1ASyu3URq009Gvdq12RdXYeWhj_6mKn47/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039089/designco/events/zjwja1uaazeha2tzzm3n.webp'
  },
  {
    title: 'Cross-Cultural Design',
    link: 'https://www.instagram.com/p/CKP2Ah5Do7T/?igshid=YmMyMTA2M2Y=',
    image: '20210121',
    date: 20210121,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1WQ3fZFnZE7EkeopCKtyWCopj0tujDUOs/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    videolink:
      'https://drive.google.com/file/d/1FKBAxpNbfDyTrJ0LMVNysDQ4tkDBuykZ/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039090/designco/events/fkvxlmibvpiu7ysfsa5k.webp'
  },
  {
    title: 'Spark AR Workshop',
    link: 'https://www.instagram.com/p/CKX45ZZjZP9/?igshid=YmMyMTA2M2Y=',
    image: '20210128',
    date: 20210128,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1ELVzMmDOyggNE_rH6biONe76PWNCbaZt/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    videolink:
      'https://drive.google.com/file/d/1atMC9ssl18q7gGAwJimI6bDcxCkU-vdU/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039089/designco/events/hteeyqbip3ubecczfllt.webp'
  },
  {
    title: 'Bob Ross Night',
    link: 'https://www.instagram.com/p/CKxUZXiDWsm/?igshid=YmMyMTA2M2Y=',
    image: '20210204',
    date: 20210204,
    time: 1700,
    location: 'Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039001/designco/events/kj4s8la9cjzrjy0fdx1i.webp'
  },
  {
    title: 'Designing for Social Impact',
    link: 'https://www.instagram.com/p/CK0CIALDIV8/?igshid=YmMyMTA2M2Y=',
    image: '20210211',
    date: 20210211,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1ux1g_kU8XMR-8WP5y8HOAKdskGyyu9MJ/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039002/designco/events/fk6bvlnrovk86qc2bnun.webp'
  },
  {
    title: 'Designer to Developer Handoff',
    link: 'https://www.instagram.com/p/CLYGp5kDn3O/?igshid=YmMyMTA2M2Y=',
    image: '20210218',
    date: 20210218,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1PLvgJrkAiKLQ5_UQdtXhNK_mlGipzDEv/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    videolink:
      'https://drive.google.com/file/d/1tiVFFE4HlpJLUIDn_VJlr0r9a8fdJqJV/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039001/designco/events/tmauhzhg20c7e0wg6mvy.webp'
  },
  {
    title: 'How to Win Your First Designathon',
    link: 'https://www.instagram.com/p/CLnaVYcD3VI/?igshid=YmMyMTA2M2Y=',
    image: '20210225',
    date: 20210225,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1rUW9dXyX4Ba-FAbLCQJdnhmRH_ifH6mN/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    videolink:
      'https://drive.google.com/file/d/1RrWXweb19Gm8c2Wo6UkCZoSAAkGWxJWu/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039001/designco/events/jobvvyocey3gklhquejy.webp'
  },
  {
    title: 'End of Quarter Celebration',
    link: 'https://www.instagram.com/p/CMLtYKhsquG/?igshid=YmMyMTA2M2Y=',
    image: '20210311',
    date: 20210311,
    time: 1700,
    location: 'Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039001/designco/events/er49lpqtsdyeyvw9ndi8.webp'
  },
  {
    title: 'Design Co: Live on Discord',
    link: 'https://www.instagram.com/p/CNYeYTUhX8F/?igshid=YmMyMTA2M2Y=',
    image: '20210408',
    date: 20210408,
    time: 1700,
    location: 'Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039002/designco/events/jzwaav6cvr9d1zyvoxdv.webp'
  },
  {
    title: 'Fireside Chat with Fjord: Design and Innovation',
    link: 'https://www.instagram.com/p/CNoM8CFD9Gc/?igshid=YmMyMTA2M2Y=',
    image: '20210415',
    date: 20210415,
    time: 1600,
    location: 'Zoom',
    slidelink: 'https://www.facebook.com/events/507309310433424/',
    videolink:
      'https://drive.google.com/file/d/1Oec_2fxbAXfJ4O3WMmFe9LBd1pXpo65t/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039001/designco/events/g1peyjrz0mxcvbjcmdpb.webp'
  },
  {
    title: 'Figma: Beyond the Basics',
    link: 'https://www.instagram.com/p/CN_dRZRjqYd/?igshid=YmMyMTA2M2Y=',
    image: '20210429',
    date: 20210429,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1SUix7cElebVRA1Rpw7eMObb2FZf_PWtA/edit?usp=sharing&ouid=113563460131626668374&rtpof=true&sd=true',
    videolink:
      'https://drive.google.com/file/d/1ulKnr15PfOz6t2zMtGz47KCC2vW0GPyF/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039000/designco/events/qbrljukf4e31wwdkbrbq.webp'
  },
  {
    title: 'Portfolio Prep Talk',
    link: 'https://www.instagram.com/p/CORXR7UNDtU/?igshid=YmMyMTA2M2Y=',
    image: '20210506',
    date: 20210506,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/10cuK0qFyVKSDE2IA9TnHhLypZsjoucTYwBP2QGS4_xY/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039000/designco/events/fq7eusptqyiikdbj1s1q.webp'
  },
  {
    title: "It's a Small (Design) World",
    link: 'https://www.instagram.com/p/CObunabthcx/?igshid=YmMyMTA2M2Y=',
    image: '20210513',
    date: 20210513,
    time: 1700,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1UALCgD8dmCjEKjHwiLFUFFJoF_V66-4fsh4YsMSDSLI/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039001/designco/events/tbtgfhca6c4gk8inyolc.webp'
  },
  {
    title: 'We’re Not Really Strangers, We’re Designers',
    link: 'https://www.instagram.com/p/CPe-bYhDeoE/?igshid=YmMyMTA2M2Y=',
    image: '20210603',
    date: 20210603,
    time: 1700,
    location: 'Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039001/designco/events/zhjnzbayefv2opujie3h.webp'
  },
  {
    title: 'DEI in Industry with Service Now',
    link: 'https://www.facebook.com/events/204020048419044/',
    image: '20210825',
    date: 20210825,
    time: 1700,
    location: 'Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039001/designco/events/u1hyivezkrfyskf7kbfk.webp'
  },
  {
    title: 'Fall Kickoff - Intro to Design',
    link: 'https://www.instagram.com/p/CUYpNgxM3so/?igshid=YmMyMTA2M2Y=',
    image: '20211006',
    date: 20211006,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1gaaLyT-MwEW8Tr2FNSznhuANNrmDDL8dFmxI4b7d3V0/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1pngsMMZctWr6aEWYlWZGuGH6Ue-o9FPF/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039002/designco/events/kxsynhijnqgh8mcsqguk.webp'
  },
  {
    title: 'Camp DCo: “Intro to _” Series',
    link: 'https://www.instagram.com/p/CU6aRoGF_gk/?igshid=YmMyMTA2M2Y=',
    image: '20211016',
    date: 20211016,
    time: 1000,
    location: 'Zoom',
    slidelink:
      'https://drive.google.com/drive/folders/1b59lylQmJiQbjOywFzRxvk8oTQsVQtFH?usp=sharing',
    videolink:
      'https://drive.google.com/drive/folders/1mhsQshQYEaON96IroYsuA4sELPIP8ACp?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039002/designco/events/tl7qc1woxo06rj9lllx0.webp'
  },
  {
    title: 'Intern Panel',
    link: 'https://www.instagram.com/p/CVB0Qe1N56h/?igshid=YmMyMTA2M2Y=',
    image: '20211020',
    date: 20211020,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1mBgvsqn5i7QqrlYtTvxwJUqKvp_id8KVZbAnQu-m8Ac/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1wveBXBXcGBZY-NNnkxJmVqjz_tcJb43V/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039001/designco/events/k1lbdk5e8bd5c0neruar.webp'
  },
  {
    title: 'Ice Skating Social',
    link: 'https://www.instagram.com/p/CVeVjwssfud/?igshid=YmMyMTA2M2Y= ',
    image: '20211029',
    date: 20211029,
    time: 1900,
    location: 'UTC ICE',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039001/designco/events/pqzm4ltqmfenruluajik.webp'
  },
  {
    title: 'Resume Workshop',
    link: 'https://www.instagram.com/p/CVmDHL5LaDE/?igshid=YmMyMTA2M2Y=',
    image: '20211103',
    date: 20211103,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1kTbX4BArfRwePcJ6C5QMGK4wVyea8wxYpxYLr2VnbuM/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1xuduab6lTEODz78v1MMkYr6dxNaKqWJr/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729039002/designco/events/evz5kprpmbcmdjqmm4i2.webp'
  },
  {
    title: 'Portfolio Workshop',
    link: 'https://www.instagram.com/p/CV36FUABgzr/?igshid=YmMyMTA2M2Y=',
    image: '20211110',
    date: 20211110,
    time: 1830,
    location: 'Dolores Huerta Room',
    slidelink:
      'https://docs.google.com/presentation/d/1onu3iNK24KfLojJpDi3AgowYTsi7P77Sn4EWWkybJqk/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037287/designco/events/csfytqyt8ln6ofgc7zyq.webp'
  },
  {
    title: 'Interviewing Workshop',
    link: 'https://www.instagram.com/p/CWMHUj0AHz9/?igshid=YmMyMTA2M2Y=',
    image: '20211117',
    date: 20211117,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1S4uOpyGHp3WMoHiWR294MRgyisRqtP5oNMaHkDCee2Y/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1mxoyEWXCvECdN9pCpdBzPILTENUgetWA/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037290/designco/events/bl1oavr0xmzms0zdxmgd.webp'
  },
  {
    title: 'End of Quarter Celebration',
    link: 'https://www.instagram.com/p/CWrpKbZtU9j/?igshid=YmMyMTA2M2Y=',
    image: '20211201',
    date: 20211201,
    time: 1830,
    location: 'Dolores Huerta Room',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037289/designco/events/hjifqlhrj2hkndpynv3v.webp'
  },
  {
    title: 'A Student Survival Guide to HCI Research',
    link: 'https://www.instagram.com/p/CYaUzV3hR9A/?igshid=YmMyMTA2M2Y=',
    image: '20220113',
    date: 20220113,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1c8O5DZJv2BZ94cxyO2Q5rXK2GO91qiTvD8bJDwLNoak/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/19vpv24sJ_2R-Mg5Vjf7C9vknWB-KR3hM/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037289/designco/events/xdan6qylauzf8upi5vvt.webp'
  },
  {
    title: 'World Wide Web(flow) Portfolio Workshop',
    link: 'https://www.instagram.com/p/CYu7EHYp0f_/?igshid=YmMyMTA2M2Y=',
    image: '20220120',
    date: 20220120,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1vBbgymYkZZChNS63aVAE94zfLY8ZNkL_xY301cJnkzs/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1sS_QbQv3EMxaoSY2SEam2yDSdt_a04ik/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037290/designco/events/wzfbid46qikdryzriwim.webp'
  },
  {
    title: 'A Crash Course in After Effects Animation',
    link: 'https://www.instagram.com/p/CZBDAXgrDV0/?igshid=YmMyMTA2M2Y=',
    image: '20220127',
    date: 20220127,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1H3G6pZguHxExMhYGq1We2Vu5JRKHH88ct4NU4tzHOKk/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1h6Pt8VRaucbwGJBFcBwM_7vGKS1VmiEt/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037288/designco/events/kicwdkyhcsyvkqbqbtey.webp'
  },
  {
    title: 'UCSD x UCD Designer Speed Dating Social',
    link: 'https://www.instagram.com/p/CZQZa75paC-/?igshid=YmMyMTA2M2Y=',
    image: '20220202',
    date: 20220202,
    time: 1800,
    location: 'Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037289/designco/events/o5tconxnh8y9gdubingn.webp'
  },
  {
    title: 'Figma: Beyond the Classroom',
    link: 'https://www.instagram.com/p/CZnQBtvrkS8/?igshid=YmMyMTA2M2Y=',
    image: '20220210',
    date: 20220210,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1RzKvTrwqGaFWw96yK2eqPYnLhymAfUmGqY82F_2lHMQ/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1vDTXmKR7RAXX-TbjZWl0PT4yvQmXHbUQ/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037289/designco/events/q3hnowkwya7gk5kbzhpu.webp'
  },
  {
    title: "Reppin' Your Voice: A Personal Branding Workshop",
    link: 'https://www.instagram.com/p/CZ3IL2qhXNM/?igshid=YmMyMTA2M2Y=',
    image: '20220217',
    date: 20220217,
    time: 1830,
    location: 'Warren College Room in Price Center',
    slidelink:
      'https://docs.google.com/presentation/d/14CsfSF0S7KdLzASjvHbfuR9ruHg7A-4zu5YRiz7muG4/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037289/designco/events/kpvbflxjmxqxygyxwupc.webp'
  },
  {
    title: 'Minor Dilemma, Major Decisions',
    link: 'https://www.instagram.com/p/CaGeOGXIvPh/?igshid=YmMyMTA2M2Y=',
    image: '20220224',
    date: 20220224,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1oIpK-KVM2yi99IBJCHxNn2CQ03od-THXCN5jvdwDhic/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1am25kASZOAbrypi2atSb9TLPxQsWT4DS/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037288/designco/events/c6n42uowpep5m61ls84z.webp'
  },
  {
    title: 'Glowing Up Your Class Projects',
    link: 'https://www.instagram.com/p/Cak1SzUhAUL/?igshid=YmMyMTA2M2Y=',
    image: '20220303',
    date: 20220303,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1BnQ3YPOD438xQm-WZmpyB-_zgJ-LzahNsUVM7JicuaQ/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1_f1nzGPPhMp5YwsTCAjKNPwlJymbZeYL/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037289/designco/events/ipmrnm9ntb0yxlywukig.webp'
  },
  {
    title: 'Study Jam with Design Co',
    link: 'https://www.instagram.com/p/Cav1IX6M-ka/?igshid=YmMyMTA2M2Y= ',
    image: '20220310',
    date: 20220310,
    time: 1830,
    location: 'Price Center Loop',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037289/designco/events/r1tjmokjrmbpsampq9d8.webp'
  },
  {
    title: 'Board Q&A',
    link: 'https://www.instagram.com/p/CbsxXNIBEPN/?igshid=YmMyMTA2M2Y==',
    image: '20220330',
    date: 20220330,
    time: 1830,
    location: 'Discord',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037288/designco/events/spjpu62hwwcz6cin7qjc.webp'
  },
  {
    title: 'Extending Your Design Career',
    link: 'https://www.instagram.com/p/Cb8zyynBAJN/?igshid=YmMyMTA2M2Y=',
    image: '20220406',
    date: 20220406,
    time: 1830,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1m24Smkreld-IwkFH9T6B2LrwYk49eDdiqNlqkX6PsvY/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1zks1XSK95lpyEMiq5T1NaagMsQccWAtq/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037289/designco/events/l8qs4ieit1vppqfqkzpy.webp'
  },
  {
    title: 'Wushiland Boba Run',
    link: 'https://www.instagram.com/p/CcHaGZKDpdR/?igshid=YmMyMTA2M2Y=',
    image: '20220413',
    date: 20220413,
    time: 1730,
    location: 'Wushiland Boba Utc',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037289/designco/events/ugnha6fjlzw1uheac0a0.webp'
  },
  {
    title: "Pushin' P(ortfolio Interviews)",
    link: 'https://www.instagram.com/p/CcUNtVSrl9a/?igshid=YmMyMTA2M2Y=',
    image: '20220420',
    date: 20220420,
    time: 1730,
    location: 'Warren College Room',
    slidelink:
      'https://docs.google.com/presentation/d/1lnIhGQrMUPthIc1UgN4auuvNdJMZmfH6atPgg8YWWZg/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037287/designco/events/j99elysfgnukkxmnvu0r.webp'
  },
  {
    title: 'Accessibility and Inclusivity in Design',
    link: 'https://www.instagram.com/p/CcolT_aBqYn/?igshid=YmMyMTA2M2Y=',
    image: '20220427',
    date: 20220427,
    time: 1830,
    location: 'Warren College Room',
    slidelink:
      'https://docs.google.com/presentation/d/1iual_twaXr6-bLbvYrVIU7AF6LKvZiAMXiFkM8iVz80/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037290/designco/events/a8uveqaqvonxnnwjku3e.webp'
  },
  {
    title: 'Alumni Panel',
    link: 'https://www.instagram.com/p/Cc61BipI8Uu/?igshid=YmMyMTA2M2Y=',
    image: '20220505',
    date: 20220505,
    time: 1830,
    location: 'Design & Innovation Building: The Basement',
    slidelink:
      'https://docs.google.com/presentation/d/1nKGkuVOx-YbAoraWDoHere09BK--DmjnEgqE1nkt4GI/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037287/designco/events/phsmdw6ejejdpvbrxxet.webp'
  },
  {
    title: 'Design Co x Design at UCI: Cross-Functional Design',
    link: 'https://www.instagram.com/p/CdmDzlBBshp/?igshid=YmMyMTA2M2Y=',
    image: '20220518',
    date: 20220518,
    time: 2000,
    location: 'Zoom',
    slidelink:
      'https://docs.google.com/presentation/d/1OKhZjs0EIPzpPAAoWsUC_MqNNFKfLZ4WyxZHo-IFMHo/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/rnw2eki2aaggkqtvpdca.webp'
  },
  {
    title: 'Design Co x WIC: Designer <> Developer Handoff',
    link: 'https://www.instagram.com/p/CduUiXuhvvK/?igshid=YmMyMTA2M2Y=',
    image: '20220525',
    date: 20220525,
    time: 1830,
    location: 'CSE Building Basement',
    slidelink:
      'https://docs.google.com/presentation/d/1jF7S5XlbRgQg8PwNS39G4E4v4IEy1zplbJbcFywacRs/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037988/designco/events/yzh60c2m7c4y8c3l17xa.webp'
  },
  {
    title: 'Yogurt World Social',
    link: 'https://www.instagram.com/p/CeNPhELLTt9/?igshid=YmMyMTA2M2Y=',
    image: '20220601',
    date: 20220601,
    time: 1830,
    location: 'Yogurt World',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/ioyrhoeborsd1zkz3gr9.webp'
  },
  {
    title: 'Build Up: DEI Speaker Series',
    link: 'https://www.instagram.com/p/Cgzn5zTts9F/?igshid=YmMyMTA2M2Y=',
    image: '20220804',
    date: 20220804,
    time: 1600,
    location: 'Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/iq7g2yaphk9urdpwwjar.webp'
  },
  {
    title: 'Design Co: Fall Kickoff',
    link: 'https://www.instagram.com/p/Ci9D1cSOLyz/?utm_source=ig_web_button_share_sheet',
    image: '20220928',
    date: 20220928,
    time: 1830,
    location: 'Design & Innovation Building 202',
    slidelink:
      'https://docs.google.com/presentation/d/1LGiWS70HZk82z1HRrOHVE4QfQ9MwX2Df4NULWm5Nwzg/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037986/designco/events/t1m7hjhjpnl7f3fbfp0l.webp'
  },
  {
    title: 'Branches of UX',
    link: 'https://www.instagram.com/p/CjJ72FCsL5Z/?igshid=YmMyMTA2M2Y=',
    image: '20221005',
    date: 20221005,
    time: 1830,
    location: 'Design & Innovation Building 202',
    slidelink:
      'https://docs.google.com/presentation/d/1_DbEYgN_LIToWagwtFJHG18dhHqv2jkfqWlKEPyB0ko/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037986/designco/events/dmm9fsz3adwmectfpjp1.webp'
  },
  {
    title: 'Camp DCo',
    link: 'https://www.instagram.com/p/CjUIIeVvXyK/?igshid=YmMyMTA2M2Y=',
    image: '20221010',
    date: 20221010,
    time: 1830,
    location: 'Design & Innovation Building 121',
    slidelink:
      'https://drive.google.com/drive/folders/1Xl9-A3mCHAx6GiRN0A7YsaSzPV6413ok?usp=sharing',
    description:
      'Calling all aspiring designers, developers, and researchers! Take the first plunge into various topics in design at Camp DCo, our annual introduction series for beginners.',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/lvfcferecoiwcz660cly.webp'
  },
  {
    title: 'Design Lab x Design Co Mixer',
    link: 'https://www.instagram.com/p/CjRqM6Ovvgj/?igshid=YmMyMTA2M2Y=',
    image: '20221013',
    date: 20221013,
    time: 1100,
    location: 'Design & Innovation Building 3rd Floor',
    description:
      'Meet DLab faculty, interns, alumni, and company representatives at the 3rd floor of the Design and Innovation Building. We’ll have speed networking activities, speakers from the Design Lab and Design Co, gift bag giveaways, company info booths, and more! Complimentary food and refreshments will be provided.',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/qo1mbltcydeqbr9v95at.webp'
  },
  {
    title: 'Intern Panel',
    link: 'https://www.instagram.com/p/CjrTgglSRQv',
    image: '20221019',
    date: 20221019,
    time: 1830,
    location: 'Design & Innovation Building 202',
    slidelink:
      'https://docs.google.com/presentation/d/14BEv5Y7s27nHCI0eF9tLgJwQd-vtM675F3BKYj0lXsY/edit?usp=sharing',
    description:
      'Interns today, industry professionals tomorrow. Get ready for our annual Intern Panel, where you’ll meet product design, UX research, and graphic design interns from companies like Meta, HP, Evil Geniuses, and more!',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/pxhpuhlh4aiwrwyjzpbe.webp'
  },
  {
    title: 'Revamp Your Resume with Deloitte',
    link: 'https://www.instagram.com/p/CkTv5T0hwkX/?igshid=YmMyMTA2M2Y=',
    image: '20221102',
    date: 20221102,
    time: 1830,
    location: 'Design & Innovation Building 202',
    description:
      'The spooky season can be full of jump scares, but don’t let job applications be one of them! To prepare for our annual design career fair, Stride, Design Co is hosting a resume workshop with Deloitte to share the best practices for designing your resume and impressing recruiters.',
    slidelink:
      'https://docs.google.com/presentation/d/1lUq0VUg2SjV8pHCVn6GBn2mluGfqfnPAbP8p9lw7UqI/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/t46sgnc5lqaqtnhzv8in.webp'
  },
  {
    title: 'Portfolio Day',
    link: 'https://www.instagram.com/p/CkZwc4QBYV4',
    image: '20221105',
    date: 20221105,
    time: 1300,
    location: 'Design & Innovation Building 202',
    description:
      'Prepping for Stride? Applying for internships? Need one last push to finally tackle your portfolio? Join Design Co at our upcoming Portfolio Day to build out and get feedback on your portfolio—all experience levels welcome!',
    slidelink:
      'https://docs.google.com/presentation/d/1lXD3DUfr_PrdvOs7q8CP9o-Td_BnyiXMXl5wtxYpFKA/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037988/designco/events/pmftjgquegltluhg4cer.webp'
  },
  {
    title: 'Intro to Print Design',
    link: 'https://www.instagram.com/p/CkzgZsPNr8u',
    image: '20221116',
    date: 20221116,
    time: 1830,
    location: 'Design & Innovation Building 202',
    slidelink:
      'https://docs.google.com/presentation/d/109f7qN-OV3WoiKg73QKcp1WKRpnM9JqKRpWNwoBfdAI/edit?usp=sharing',
    description:
      'Design is about bringing ideas to life – not only on screens, but in the physical world as well. At our upcoming Intro to Print Design GBM, we’ll be introducing print design and its basics.',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037990/designco/events/yoqyjsmv3e9e0wca5mmz.webp'
  },
  {
    title: 'CSSA x Design Co Boba Run',
    link: 'https://www.instagram.com/p/ClDNN9zOJWe/?igshid=YmMyMTA2M2Y=',
    image: '20221121',
    date: 20221121,
    time: 1830,
    location: "BenGong's Tea San Diego",
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/jannkyyaafyc0cb48du8.webp'
  },
  {
    title: 'End-of-Quarter Study Jam',
    link: 'https://www.instagram.com/p/ClVJEAbr5Jt/?igshid=YmMyMTA2M2Y=',
    image: '20221130',
    date: 20221130,
    time: 1830,
    location: 'Design & Innovation Building 208',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/ujiy4vpa6dm1tvyslxqv.webp'
  },
  {
    title: 'Winter Kickoff',
    link: 'https://www.instagram.com/p/CnBS2j4NA4J/',
    image: '20230111',
    date: 20230111,
    time: 1830,
    location: 'Design & Innovation Building 208',
    description:
      'Design Co is excited to welcome everyone back for another great quarter! Join us at our Winter Kickoff next Wednesday, 1/11 at 6:30 PM in DIB Room 208 to learn about what we have in store for the weeks ahead, including our winter event schedule. Meet new design buds and get to know the board during a game tournament at the end!',
    slidelink:
      'https://docs.google.com/presentation/d/1G1J8GZaivtLWYx6M7mJIbwj3EX06krSzmRA425n28hs/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/vthi3isrh2se5ljd7zqh.webp'
  },
  {
    title: 'Ice Skating Social',
    link: 'https://www.instagram.com/p/CnIJHgmOSg5/?igshid=YmMyMTA2M2Y=',
    image: '20230113',
    date: 20230113,
    time: 1900,
    location: 'UTC Ice',
    description:
      'Looking to make new friends and winter memories? Join Design Co at UTC Ice for some ice skating fun on Friday, 1/13. Meet us at the Central Campus Trolley Station at 7 PM to head over with friends, or join us later on the rink at 7:30 PM. Tickets will be $20 if purchased online 24 hours in advance or $25 on-site.',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037988/designco/events/nakme0rzumacogfnw4on.webp'
  },
  {
    title: 'Figma Day',
    link: 'https://www.instagram.com/p/CnfUneaSWr-/?igshid=YmMyMTA2M2Y=',
    image: '20230118',
    date: 20230118,
    time: 1830,
    location: 'Design & Innovation Building 208',
    description:
      'Figma is a designer’s best friend—join us for Design Co’s Figma Day this Wednesday, 1/18 at 6:30 PM in DIB 208 for Beginner and Advanced Figma Workshops! No matter your skill level, get some hands-on practice with the industry’s favorite prototyping tool. Be sure to have a Figma account ready and bring your computer!<br>BEGINNER: Get started with an overview of Figma, an introduction of tools and simple prototyping.<br>ADVANCED: Up your skills with auto layout, components, and scrolling with your prototypes.',
    slidelink:
      'https://docs.google.com/presentation/d/1oq7Mdx0geWqVK3oxzg_QSKbPIV6T_Z7hptpFdTyh3YU/edit?usp=sharing',
    videolink:
      'https://drive.google.com/file/d/1YILMyA_nkPYyar9dLSJE0t7W4oCeZ5oC/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729037987/designco/events/tsvmdtubjjdt6wcyjy42.webp'
  },
  {
    title: 'Coffee (Chats) & (Study) Jam',
    link: 'https://www.instagram.com/p/CnnAXv5S31T/?igshid=YmMyMTA2M2Y=',
    image: '20230120',
    date: 20230120,
    time: 1200,
    location: 'Design & Innovation Building 306',
    description:
      'Procaffeination and winter blues hit hard this quarter – boost your energy (and motivation) by studying with your design buddies! Come study, snack, or jam with friends at our joint Coffee Chat & Study Jam session this Friday, 1/20 from 12-2PM in DIB 306. Hope to see you all there!',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038210/designco/events/hz866pjfevgpk4myjd0m.webp'
  },
  {
    title: 'Speed Networking',
    link: 'https://www.instagram.com/p/CnqeWN2Lb4q/?igshid=YmMyMTA2M2Y=',
    image: '202301251',
    date: 20230125,
    time: 1830,
    location: 'Design & Innovation Building 208',
    slidelink:
      'https://docs.google.com/presentation/d/19hXbB_rlgKlW8kF_dEJWbbNeqx5X-ns3DqILpAyjOCg/edit?usp=sharing',
    description:
      'Recruiting 101: Sometimes, it’s not about who you know, but who knows YOU. How can you put yourself out there and connect with people outside your current circle? At our next GBM, we’ll be going over networking essentials such as how to schedule coffee chats with industry professionals, email recruiters, and make yourself stand out amongst the sea of applicants. Join us on Wednesday, 11/25 at 6:30PM in DIB 208 to learn how to present yourself and network with others!',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034668/designco/events/vevujtlhsr3wmxdsemvl.webp'
  },
  {
    title: 'TapEx Fundraiser',
    link: 'https://www.instagram.com/p/Cns6EPar-fq/?igshid=YmMyMTA2M2Y=',
    image: '202301252',
    date: 20230125,
    time: 1930,
    location: 'Price Center',
    description:
      'Sip for a cause! TapEx is supporting Design Co with a fundraiser next Wednesday, 1/25. Come through from 7:30-9:30 PM, show this flyer, and get 5% off your order. Satisfy your boba cravings and support your favorite design org all in one!',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034672/designco/events/bxueg7eaj1vdz6byrdgt.webp'
  },
  {
    title: 'Meet Fresh Dessert Run',
    link: 'https://www.instagram.com/p/CoNtOTMy_wh/?utm_source=ig_web_copy_link',
    image: '20230208',
    date: 20230208,
    time: 2000,
    location: 'Meet Fresh at Mira Mesa',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038209/designco/events/wq9qptwbt1vct32854xq.webp'
  },
  {
    title: 'Elevating Your Portfolio',
    link: 'https://www.instagram.com/p/Coi_bMTLzAO/?utm_source=ig_web_copy_link',
    image: '20230215',
    date: 20230215,
    time: 1830,
    location: 'Design & Innovation Building 208',
    slidelink:
      'https://docs.google.com/presentation/d/1tkkgvd7fYu-zp71O8Pxlx7Wc5BrjNC1SZiqeQhqF5YA/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038210/designco/events/ytgjbxfm0drgpcdqfd3r.webp'
  },
  {
    title: 'Accenture Song Portfolio Workshop',
    link: 'https://www.instagram.com/p/CooSh96rptF/?utm_source=ig_web_copy_link',
    image: '20230222',
    date: 20230222,
    time: 1500,
    location: 'Zoom',
    slidelink:
      'https://drive.google.com/file/d/1Twds0im9cAxqkxHNGN0JD2ZdGA6YcR3j/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038209/designco/events/gmu2adowixwcxmrezsuk.webp'
  },
  {
    title: 'The Laws of Notion',
    link: 'https://www.instagram.com/p/CpI3pewyNiv/?utm_source=ig_web_copy_link',
    image: '20230301',
    date: 20230301,
    time: 1830,
    location: 'Design & Innovation Building 208',
    slidelink:
      'https://drive.google.com/file/d/14PBhcM6oyd1Nc2oqWotxW2wMjrppMODo/view?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038209/designco/events/pidqxmm7vet5ed4sugxc.webp'
  },
  {
    title: 'Sony Office Tour & Audio Workshop',
    link: 'https://www.instagram.com/p/Co3wMYhL5jI/?igshid=YmMyMTA2M2Y=',
    image: '20230307',
    date: 20230307,
    time: 900,
    location: 'Sony Electronics, San Diego',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038209/designco/events/wsni4cvfde0ntnam5ngd.webp'
  },
  {
    title: 'Interviewing Like a Pro',
    link: 'https://www.instagram.com/p/CpdO5pdvvk0/?igshid=YmMyMTA2M2Y=',
    image: '20230308',
    date: 20230308,
    time: 1830,
    location: 'Design & Innovation Building 208',
    slidelink:
      'https://docs.google.com/presentation/d/1dDKN8K-6GjcM3ba1nAjfOlVFbtFGUVSGGbD8O8n82rQ/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038210/designco/events/rpi9nfvnzhd0ehcxiviq.webp'
  },
  {
    title: 'End-of-Quarter Gelato Run',
    link: 'https://www.instagram.com/p/CpmI-VUupl-/?igshid=YmMyMTA2M2Y=',
    image: '20230315',
    date: 20230315,
    time: 1830,
    location: 'Little Italy',
    description:
      'Finish the last stretch of the quarter on a sweet note at Design Co’s Gelato Run in Little Italy! Come chill with friends and indulge in gelato at Bobboi in the Little Italy Food Hall. Meet at the Central Campus trolley station on Wednesday, 3/15 at 6:30 PM to head over together and celebrate the end of the quarter!',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038209/designco/events/cs9d1y2ixajzci0zjxlb.webp'
  },
  {
    title: 'Twitch Office Tour',
    link: 'https://www.instagram.com/p/Co_iqXvuT9_/?igshid=YmMyMTA2M2Y=',
    image: '20230317',
    date: 20230317,
    time: 800,
    location: 'Twitch Office, Irvine',
    videolink: 'https://youtu.be/tgVnX7-PN3Y',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038209/designco/events/qcwrktjsbnhhb3gbcb9o.webp'
  },
  {
    title: 'Mario Kart Tournament',
    link: 'https://www.instagram.com/p/CqnvNOnpLgW/',
    image: '20230405',
    date: 20230405,
    time: 1830,
    location: 'DIB 208',
    description:
      'Kick off spring quarter with a bang at Design Co’s Mario Kart tournament! Join us on Wednesday, 4/5 at 6:30PM in DIB 208 to enjoy delicious ReThink ice cream as you put your Mario Kart skills to the test and assert dominance as the best player (within DCo). See you at the starting line!',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038209/designco/events/ovjdwvnnuzi2u1ix263r.webp'
  },
  {
    title: 'Intro to Inclusive Design',
    link: 'https://www.instagram.com/p/Cq3lzcTP4OU/',
    image: '20230412',
    date: 20230412,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1_CTI6eTLt9VUW07vvLrLec3f0or4F1eXUM76j-QOnkU/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038209/designco/events/ppdii4mp6mhogvrvyfra.webp'
  },
  {
    title: 'FigJam Ideation Workshop',
    link: 'https://www.instagram.com/p/CrKExOJPG0M/',
    image: '20230419',
    date: 20230419,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1-VfgsXoXqzEI9slKhpgSLtBL5rZ2Zw9vd2xrK6NXNrU/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038210/designco/events/yuqdfxej7c7lpoktelen.webp'
  },
  {
    title: 'Humane Physical Product Design Workshop',
    link: '',
    image: '20230426',
    date: 20230426,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1VgUmbclWL2JtkngQR_XzuNId1lanf2lTcG6WYBToebU/edit#slide=id.g63751c60fc_0_180',
    description:
      'Humane — an AI startup founded by former members of Apple’s design and engineering team — will be tuning in virtually to teach us about physical product design.',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038210/designco/events/tlhvkwqxpf0me3ktxmk1.webp'
  },
  {
    title: 'Diversity & Design with Airbnb',
    link: 'https://www.instagram.com/p/CrwFSIJPPbL/',
    image: '20230503',
    date: 20230503,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1AcKEO2wLfvARB-BZtQZ31Zmea3i8vNAd5YEdsBSLd-s/edit#slide=id.g23e3acf936a_1_16',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038209/designco/events/rbexiaf7jl1djrfllsph.webp'
  },
  {
    title: 'Alumni Panel',
    link: 'https://www.instagram.com/p/Cr-F_OTuq80/',
    image: '20230510',
    date: 20230510,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1DtSEk6Z6ozAxvTrYDYWnmiHY6Bld4d-f77xuNOP0YBQ/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038210/designco/events/p0awk5e0gmaqcrmqoxn1.webp'
  },
  {
    title: 'Cruising Through Design Frontiers',
    link: 'https://www.instagram.com/p/CsSjyDou5dT/',
    image: '20230517',
    date: 20230517,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1cNkkdJDcEzCd95dAZVkDhIDVRjwoXxfUQTS-Jqt3i60/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038210/designco/events/rranvwrykuv5arq7dnjd.webp'
  },
  {
    title: 'TSE X Design Co: Design to Developer Handoff',
    link: 'https://www.instagram.com/p/CsaOEBqrKVa/',
    image: '20230524-1',
    date: 20230524,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1PB1SQgEZZUIWprQcRWt-abinBGAlek2QjYXxEYMIaL4/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038211/designco/events/tcm7ou55hcggd5a2avqn.webp'
  },
  {
    title: 'Blink UX Office Tour',
    link: 'https://www.instagram.com/p/CsAmr1WOWZJ',
    image: '20230524',
    date: 20230524,
    time: 900,
    location: 'Blink UX SD Office',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038210/designco/events/wqigivu1jkush9qyargs.webp'
  },
  {
    title: 'UXGO Spring Sendoff Panel',
    link: 'https://www.instagram.com/p/CsuUg8Pv3u1/',
    image: '20230602',
    date: 20230602,
    time: 1830,
    location: 'The Loft',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038400/designco/events/j60skcpah7kduupjv2lv.webp'
  },
  {
    title: 'End-of-Year Bonfire Celebration',
    link: 'https://www.instagram.com/p/CtHsrAgPuwC/',
    image: '20230609',
    date: 20230609,
    time: 1930,
    location: 'La Jolla Shores',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038400/designco/events/n0zrieylehjd6q6wn91h.webp'
  },
  {
    title: 'Fall Kickoff',
    link: 'https://www.instagram.com/p/Cx1RH2yS395/',
    image: '20231004',
    date: 20231004,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1DXIxE7O9FSuYcmK6mlYCULPdEAmLUgdHy2ZwmajLHaU/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038399/designco/events/u7hacvdpmdqhwiykoo1k.webp'
  },
  {
    title: 'Paint Night Social',
    link: 'https://www.instagram.com/p/CyKOHfbLb8G/',
    image: '20231011',
    date: 20231011,
    time: 1830,
    location: 'DIB 208',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038401/designco/events/qafqvkbuxnjq9xvy2uza.webp'
  },
  {
    title: 'Speed Friending @Yogurtworld',
    link: 'https://www.instagram.com/p/CyXCmtOOUxY/',
    image: '20231016-1',
    date: 20231016,
    time: 1730,
    location: 'Yogurt World',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038400/designco/events/d6zqahuwxwdew1pj2lmy.webp'
  },
  {
    title: 'Camp DCO',
    link: 'https://www.instagram.com/p/CyZuOW1P-bG/',
    image: '20231016-2',
    date: 20231016,
    time: 1830,
    location: 'DIB 208',
    slidelink: 'https://linkmix.co/21034215',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038398/designco/events/itklp6hb52nicocfupmj.webp'
  },
  {
    title: 'Intern Panel',
    link: 'https://www.instagram.com/p/Cyrpti_gjDZ/',
    image: '20231025',
    date: 20231025,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1g8KKooOlruKZy1d93XCs62TDu-zwPWEj0t_ySf62jus/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038399/designco/events/ypkcznpkwsutct7jrcek.webp'
  },
  {
    title: 'Picnic & Crafts',
    link: 'https://www.instagram.com/p/Cy4FLNzSMbQ/',
    image: '20231028',
    date: 20231028,
    time: 1300,
    location: 'Sungod Lawn',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038399/designco/events/xs11bszgreocrngnmzpg.webp'
  },
  {
    title: 'Guide to UX Industries',
    link: 'https://www.instagram.com/p/CzFWsgSJgZy/',
    image: '20231101',
    date: 20231101,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1HxKamIybheOEuBIQdQrd2V-0Mq7lieUq0_4hL5KLttc/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038399/designco/events/keb3qwvhapw5ydp3xnw7.webp'
  },
  {
    title: 'Stride Prep GBM',
    link: 'https://www.instagram.com/p/CzVZArmr0Jl/',
    image: '20231108',
    date: 20231108,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/19cNGi-2l4NEuzchRfgujs7W_y-p4djHp4Wmlg1huINw/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038398/designco/events/yoza6hknclzhyundxkla.webp'
  },
  {
    title: 'Stride 2023',
    link: 'https://www.instagram.com/p/CzK1aE3rlx5/',
    image: '20231102',
    date: 20231113,
    time: 1200,
    location: 'Student Center Stage Room and Patio',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038398/designco/events/wzjiougnqdif0e0ifpus.webp'
  },
  {
    title: 'Design Research Principles & Opportunities',
    link: 'https://www.instagram.com/p/C0N2v-KrXt-/',
    image: '20231129',
    date: 20231129,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1Ct6MXgQzQf116EBGqUQD1rIJgxVJQIM6PmRWhOhqlis/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038400/designco/events/hxwpmtigdnahh9bsorez.webp'
  },
  {
    title: 'Holiday Study Jam',
    link: 'https://www.instagram.com/p/C0ck6N6ShtY/',
    image: '20231206',
    date: 20231206,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1ryl3z21EbX4JWoVJLWEfVkb5HkJs_gRkOxTjEfvE9oM/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038399/designco/events/ao43h9q1hz528qetodox.webp'
  },
  {
    title: 'Winter Kickoff',
    link: 'https://www.instagram.com/p/C13byqsrluk/',
    image: '20240110',
    date: 20240110,
    time: 1830,
    location: 'DIB 208',
    slidelink:
      'https://docs.google.com/presentation/d/1wDdfxtmYUzsfDBvXu_h5w5fKdToOd4pHyo5cvxZJFBA/edit?usp=sharing',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038400/designco/events/d1lcbpew4gbmiluyu0dv.webp'
  },
  {
    title: 'Designing for Healthcare w/One Medical',
    link: 'https://www.instagram.com/p/C2ItQS8y5De/',
    image: '20240118-1',
    date: 20240118,
    time: 1300,
    location: 'Virtual',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038399/designco/events/vwwqoxawgqz8qxt7en5v.webp'
  },
  {
    title: 'Fan-Fan Fundraiser',
    link: 'https://www.instagram.com/p/C2EH02SrVXM/',
    image: '20240118-2',
    date: 20240118,
    time: 1830,
    location: 'Fan-Fan',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038399/designco/events/uuidnz6kxjkp0kpxmikq.webp'
  },
  {
    title: 'Figma Workshop',
    link: 'https://www.instagram.com/p/C2bnEK8L2Sl/',
    image: '20240125',
    date: 20240125,
    time: 1830,
    location: 'DIB 208',
    description:
      'Elevate your design skills at Design Co’s Figma Workshop! Ah, Figma, the holy grail platform for designers. We’re calling designers of all levels that are interested in sharpening their Figma skills to join us for a hands-on session! We will be hosting two simultaneous sessions for beginners and advanced users on Wednesday, 1/24 at 6:30 in DIB 208 and 306!',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038399/designco/events/st5vbp7ppqartl2g0vco.webp'
  },
  {
    title: 'Humane AI Panel',
    link: 'https://www.instagram.com/p/C2q8ly6rxF5/',
    image: '20240131',
    date: 20240131,
    time: 1830,
    location: 'DIB 208 + Zoom',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729038399/designco/events/nodf8aamc6drfogffyja.webp'
  },
  {
    title: "DCO's Love Hub: Valentine's Grams on Library Walk",
    link: 'https://www.instagram.com/p/C3HetcfOO2_',
    image: '20240212',
    date: 20240212,
    time: 1000,
    location: 'Library Walk',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034669/designco/events/zkmvt1mg0arwokcbyeui.webp'
  },
  {
    title: 'Pipe Cleaner Bouquet Making Social',
    link: 'https://www.instagram.com/p/C3PEk5QOS0S/',
    image: '20240214',
    date: 20240214,
    time: 1830,
    location: 'DIB 208',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034660/designco/events/tnaqv2dqxw375rgzzxwc.webp'
  },
  {
    title: 'Designing for AR',
    link: 'https://www.instagram.com/p/C3twPotr1Yd/',
    image: '20240228',
    date: 20240228,
    time: 1830,
    location: 'DIB 208',
    description:
      'Curious about creative career paths in tech and business? Learn about the world of AR design and video creation from a Product Designer at Google — who transitioned from a business background to being at the forefront of design excellence! Show up on Wednesday, 2/28 at 6:30 in DIB 208 to gain more insight!',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034670/designco/events/nlojwk7abgngnycmlpma.webp'
  },
  {
    title: 'DCo Movie Night',
    link: 'https://www.instagram.com/p/C5PABDqy0GD',
    image: '20240403',
    date: 20240403,
    time: 1900,
    location: 'ERC Room',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034658/designco/events/kgqxmyftymewvl4kdvak.webp'
  },
  {
    title: 'Design Frontiers 2024 Crash Course',
    link: 'https://www.instagram.com/p/C5U13DyrdOA',
    image: '20240410',
    date: 20240410,
    time: 1830,
    location: 'DIB 208',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034665/designco/events/pzccnispusidrm7d600x.webp'
  },
  {
    title: 'Portfolio Studio',
    link: 'https://www.instagram.com/p/C5g7Yy_yxDC',
    image: '20240411',
    date: 20240411,
    time: 1900,
    location: 'DIB 208',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034658/designco/events/ciqla9bemzlniiw6clrm.webp'
  },
  {
    title: 'Design Frontiers 2024',
    link: 'https://www.instagram.com/p/C5SgjB-OzaD',
    image: '20240413',
    date: 20240413,
    time: 900,
    location: 'DIB 208',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034667/designco/events/pojjczrjolhlvn79fg2n.webp'
  },
  {
    title: 'Brand Design Bootcamp',
    link: 'https://www.instagram.com/p/C5uQ6scJhxt',
    image: '20240417',
    date: 20240417,
    time: 1830,
    location: 'DIB 208',
    description:
      'Are you ready to transform potential into performance? Dive into the world of branding design at our upcoming bootcamp! Learn the ins and outs of branding design and how honing your design skills can elevate your UX/UI and product creation game! Level up your design skills with us on Wednesday, 4/17 from 6:30- 8 PM in DIB 208.',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034659/designco/events/p0exp9488e5cnsoomhrb.webp'
  },
  {
    title: 'Designer-Developer Handoff',
    link: 'https://www.instagram.com/p/C57eGoUrdOX',
    image: '20240424',
    date: 20240424,
    time: 1830,
    location: 'DIB 208',
    description:
      'Embark on a journey from design to deployment with Triton Software Engineering and Design Co 🚀!',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034667/designco/events/n9qkwyrxepfthfdnsnsg.webp'
  },
  {
    title: 'Alumni Panel',
    link: 'https://www.instagram.com/p/C6ZLnjXxmjH',
    image: '20240501',
    date: 20240501,
    time: 1830,
    location: 'DIB 208',
    description:
      'Starting to stress about what life post-grad might look like with a Cognitive Science - Design degree? Never fear, Design Co is here!',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034672/designco/events/gaxz4qiyxozia2m4desw.webp'
  },
  {
    title: 'Phone Charm Craft Social',
    link: 'https://www.instagram.com/p/C6nImf8rJzQ',
    image: '20240508',
    date: 20240508,
    time: 1830,
    location: 'DIB 208',
    description:
      "Get ready for a night of creativity and connection at Design Co's social with Women in Computing! Add some ✨charm✨ to your phone and your evening at our Phone Charm Craft social.",
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034667/designco/events/oeslzct63pc7rvj46inf.webp'
  },
  {
    title: 'Time Capsule Social',
    link: 'https://www.instagram.com/p/C7PeF6QvWFg',
    image: '20240522',
    date: 20240522,
    time: 1830,
    location: 'DIB 208',
    description:
      "Dear Future self… 💌\nJoin us for Design Co's Time Capsule Social on Wednesday, 5/22 at 6:30 PM in DIB 208. Take a break from the quarter-system grind — reflect on the year, write letters to your future self, and enjoy a chill study jam with friends! See you there!",
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034672/designco/events/l60jsu0cwgri85k5jtcu.webp'
  },
  {
    title: "Handel's Ice Cream Run",
    link: 'https://www.instagram.com/p/C7s9kreOCwo',
    image: '20240605',
    date: 20240605,
    time: 1830,
    location: 'UC Trolley Stop',
    description:
      "Celebrate the end of a sweet year with Design Co at Handel's in La Jolla Village! 🍨",
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034672/designco/events/ktj4v5duenbw1npcsgnp.webp'
  },
  {
    title: 'Fall Kickoff',
    link: 'https://www.instagram.com/p/DAXbIV8JJW9',
    image: '20241002',
    date: 20241002,
    time: 1830,
    location: 'DIB 208',
    description:
      'Long time no see! Join Design Co on Wednesday 10/02 at 6:30 PM in DIB 208 for our Fall Kickoff.',
    slidelink:
      'https://www.figma.com/deck/yArT7aME47Hv0vhd8Vfa0j/GBM-%231%3A-Fall-Kickoff-2024',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034660/designco/events/pvvo1nncvq8arptnjrzi.webp'
  },
  {
    title: 'Slime-Making Soirée',
    link: 'https://www.instagram.com/p/DApbT1iJtER',
    image: '20241009',
    date: 20241009,
    time: 1830,
    location: 'DIB 208',
    description:
      'Stick with Design Co next Wednesday night at our Slime-Making Soiree! Whether you’re here to build community or to relive your 2016 slime days, we can’t wait to hangout on Wednesday, 10/9 at 6:30 PM in DIB 202/208.',
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729034670/designco/events/i7htwjrxbh7bqmunkeqz.webp'
  },
  {
    title: 'Camp DCO',
    link: 'https://www.instagram.com/p/DA7DUiXyPEz',
    image: '20241016',
    date: 20241016,
    time: 1830,
    location: 'DIB 208',
    description: `Ready to jumpstart your career in UX design? Welcome to Camp DCO: our week-long bootcamp for all things UX design – and you’re invited! 💌

Dive into our hands-on workshops on Wednesday, 10/16 and Friday, 10/18 @ 6:30-8 PM in DIB 208!

From UX Research to Design Systems to Web Dev, learn which design niche best fits you and your career goals.`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729056682/designco/events/xnt2ic0q5qzkefsxbydd.webp'
  },
  {
    title: 'Personal Brand Workshop',
    link: 'https://www.instagram.com/p/DBNUJa4P--d/',
    image: '20241023',
    date: 20241023,
    time: 1830,
    location: 'DIB 208',
    description: `Ready to level up your personal brand?

Join us on Wednesday, 10/23 at 6:30 PM in DIB Room 208 for an interactive workshop all about building your unique flair as a designer. We’ll dive into strategies for crafting standout portfolios, designing eye-catching resumes, and boosting your networking game. Don’t miss out on these valuable insights!`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1729232305/designco/events/ankjbdd6qtrprwczykq2.webp'
  },
  {
    title: 'Intern Panel',
    link: 'https://www.instagram.com/p/DBfFgfMywrZ',
    image: '20241030',
    date: 20241030,
    time: 1830,
    location: 'DIB 208',
    description: `Visualize your future with Design Co. If you’re looking for your next summer internship, or wondering about what being a designer in tech looks like, join us for our Intern Panel on Wednesday, 10/30 at 6:30 PM in DIB 208!

We’ll be having previous interns at Warner Bros Discovery, KeyBank, Blizzard Entertainment, and more share about their experiences and insights. Soak in their advice, ask questions, and take that next step towards landing your dream job! Keep an eye out for our panelists introductions coming soon.`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1730348561/designco/events/xnnakownxm1xtrdshzen.webp'
  },
  {
    title: 'Prep For Stride',
    link: 'https://www.instagram.com/p/DBxehzMJxZE',
    image: '20241106',
    date: 20241106,
    time: 1830,
    location: 'DIB 208',
    description: `Ready to crack the code on networking?

Join us on Wednesday, 11/6 at 6:30PM in DIB 208 to uncover tips and tricks for making the most of Stride, our annual fall career fair! From perfecting your pitch to building confidence, we’ll give you all the tools you need to sleuth your next big opportunity. Dive in, detectives of design—let the investigation into your future begin!`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1730348559/designco/events/bi9lsqmqytxw2smaqmxw.webp'
  },
  {
    title: 'Stride 2024',
    link: 'https://www.instagram.com/p/DCQb4knRCcy',
    image: '20241113',
    date: 20241113,
    time: 1000,
    location: 'DIB 208',
    description: `Uncover the enigma of your future design career.

Join us for Design Co’s annual career fair, STRIDE! 

STRIDE is a uniquely design-forward career fair connecting student designers with company representatives. Gear up for 1:1 networking, resume reviews, and company info sessions – and make strides in your design career. 

UPDATE: Below is a list of updated companies attending STRIDE!

Companies recruiting:
+ Art of Problem Solving
+ The Design Lab
+ UCSD Library
+ ACM at UCSD

Companies attending:
+ Google
+ Notion
+ San Diego Zoo
+ Illumina

When: Wednesday, 11/13
Time: 10 AM - 2 PM
Where: DIB 208

For registration details, visit stride24.ucsddesign.co`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1737751966/designco/events/ywevc8bczqe3wsbv7zpx.webp'
  },
  {
    title: 'Personality Potluck',
    link: 'https://www.instagram.com/p/DCVNhdzSh7Q',
    image: '20241120',
    date: 20241120,
    time: 1830,
    location: 'DIB 208',
    description: `Join us for a sweet evening at Design Co’s Personality Potluck! 🍬

Bring your own candy (BYOC) to add to our candy salad bowl and satisfy your sweet tooth while taking fun personality tests together! Pack up a candy bag full of everyone’s favorite picks to take home. See you on Wednesday, 11/20 at 6:30 PM in DIB 208!`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1737751966/designco/events/s67ueetf5n2avq55qkkh.webp'
  },
  {
    title: 'Yogurt World Fundraiser',
    link: 'https://www.instagram.com/p/DC-PnBgyDR2',
    image: '20241204',
    date: 20241204,
    time: 1830,
    location: 'DIB 208',
    description: `Yearning for a sweet treat before finals? 🍧

Swing by Design Co’s Yogurt World Fundraiser on Wednesday, 12/4 at 6:30PM (or anytime from 11 AM-9 PM). Satisfy your sweet tooth cravings while socializing with old and new friends – and get a 10% discount by showing our flyer at the register!`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1737752036/designco/events/eazrtsk8bbiis17vr27f.webp'
  },
  {
    title: 'Winter Kickoff',
    link: 'https://www.instagram.com/p/DEYhCStSLpu',
    image: '20250108',
    date: 20250108,
    time: 1830,
    location: 'DIB 208',
    description: `Aaand we’re back! Join us for Design Co’s Winter Kickoff on Wednesday, 1/8 at 6:30 PM in DIB 208. See what events Design Co has in store for you this quarter, and get a sneak peek on our upcoming board recruitment! 🫣

Whether you’re a long-time member or new to our community, this is the perfect way to get involved — hope to see you all there!`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1737752036/designco/events/kov6etuji2pofywttsol.webp'
  },
  {
    title: 'Ice Skating Fundraiser',
    link: 'https://www.instagram.com/p/DEdlbfryV4G',
    image: '20250110',
    date: 20250110,
    time: 1900,
    location: 'UCSD Trolley Stop',
    description: `Glide into the new year with Design Co at our Ice Skating Fundraiser!

Tickets are $30, with all proceeds supporting our upcoming events and initiatives. A friendly reminder that pre-event sign-up is required — secure your spot here: https://tinyurl.com/yaunnc8w (link in bio)

See you on the rink — Friday, 1/10 at 7:30 PM at UTC Ice Sports Center!`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1737752036/designco/events/saw1ifvtjb4luydy4knd.webp'
  },
  {
    title: 'Board Recruitment Open House',
    link: 'https://www.instagram.com/p/DEjHensp7LP',
    image: '20250115',
    date: 20250115,
    time: 1830,
    location: 'DIB 208',
    description: `Looking to shape the next generation of designers at UCSD? Meet the faces behind Design Co at our Board Recruitment Open House on Wednesday, 1/15 at 6:30 PM in DIB 208.

Don’t miss your chance to learn about our unique teams, ask board members your burning questions, and learn all the tips ’n tricks to stand out in your application in preparation for board recruitment.`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1737752035/designco/events/dywtnyieeenvqgdfogbt.webp'
  },
  {
    title: 'TapEx Fundraiser',
    link: 'https://www.instagram.com/ucsddesignco/p/DEq4RjipVP_',
    image: '20250115',
    date: 20250115,
    time: 2000,
    location: 'UCSD Price Center',
    description: `Need a little pick-me-up after GBM? Treat yourself to Tapex with Design Co on Wednesday, 1/15 at 8-10 PM.

Socialize with us after Board Recruitment Open House while satisfying your boba cravings, and get 5% off your order by showing this flyer at the register!`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1737752036/designco/events/iampu4wb7rsfmpc041or.webp'
  },
  {
    title: 'Importance of Design in Start Ups',
    link: 'https://www.instagram.com/p/DEtUmd-PROg',
    image: '20250114',
    date: 20250114,
    time: 1700,
    location: 'Rady SkyDeck & Zoom',
    description: `Join us and @ucsdtritonventures 🤝 for a Fireside Chat with Karine Hsu, Co-Founder and Partner at Slope — a design agency specializing in creative work for high-growth startups since 2019. Karine will share her insights on the importance of leveraging design skills in startups.

Don’t miss this opportunity to learn from her expertise this Tuesday, 1/14 at 5-5:45 PM in Rady Skydeck or Zoom! RSVP at https://lu.ma/22xnehua`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1737752036/designco/events/vkg7oiqrn4tgg9fu0bce.webp'
  },
  {
    title: 'Creative Coding Workshop',
    link: 'https://www.instagram.com/p/DE3hkdMS8r7',
    image: '20250122',
    date: 20250122,
    time: 1830,
    location: 'DIB 208',
    description: `Explore creativity through code! Ever wondered how design and development come together? Join us for our Creative Coding Workshop — a hands-on session for beginners interested in the intersection of programming and artistic expression.

See you on Wednesday, 1/22 at 6:30 PM in DIB 208. No experience needed — just bring your creativity!`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1737752036/designco/events/hfudxu6qi5klqo1cdflt.webp'
  },
  {
    title: 'Figma x Framer Workshop',
    link: 'https://www.instagram.com/p/DFJYhXlSfuj',
    image: '20250129',
    date: 20250129,
    time: 1830,
    location: 'DIB 208',
    description: `Level up your prototyping skills at Figma x Framer workshop!

Whether you’re a prototyping pro or just exploring these platforms, this hands-on workshop is your chance to sharpen your skills and grow your design toolkit.

What’s in store:
- Learning experience with mid-level Figma tools
- Smooth handoff from Figma to Framer
- Framer fundamentals for interactive prototyping

See you on Wednesday, 1/29 at 6:30 PM in DIB 208!`,
    imageURL:
      'https://res.cloudinary.com/design-co-ucsd/image/upload/v1737752036/designco/events/epqsm4l7lrssycstzt4x.webp'
  }
];

// if npm start fails you npm rebuild node-sass

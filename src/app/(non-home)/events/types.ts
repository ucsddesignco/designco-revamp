export interface NormalEvent {
  _id: string;
  title: string;
  image: string;
  date: number;
  time: number;
  location: string;
  description: string;
  link: string;
  slides: string | null;
}

export interface LargeEvent {
  _id: string;
  title: string;
  link: string;
  image: string;
  displayDate: string;
  date: number;
}

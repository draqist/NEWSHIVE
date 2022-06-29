export interface Trending {
  source_id: string;
  source: {
    name: string;
  };
  keywords: [];
  creator: string;
  title: string;
  full_description: string;
  description: string;
  link: string;
  image_url: string;
  video_url: string;
  pubDate: string | '2022-06-18 20:48:31';
  content: string;
  country: [];
  category: [string];
  language: string;
}
interface TrendingArray extends Array<Trending> {}
export type { TrendingArray };

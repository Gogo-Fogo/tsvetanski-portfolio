import posts from './usg-posts.json';

export const writingPath = '/writing';
export const writingTitle = 'USG Blog Archive';
export const testudoPostPath = '/writing/testudo-joins-usg';
export const usgPosts = posts;

const dateFormat = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long',
  timeZone: 'UTC',
});

export function formatPostDate(date: string) {
  return dateFormat.format(new Date(date));
}

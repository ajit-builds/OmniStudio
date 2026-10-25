export const ROUTES = {
  HOME: '/',
  WORK: '/work',
  WORK_DETAIL: '/work/:slug',
  ABOUT: '/about',
  SERVICES: '/services',
  JOURNAL: '/journal',
  JOURNAL_DETAIL: '/journal/:slug',
  CONTACT: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

export const getWorkDetailPath = (slug: string): string => {
  return `/work/${encodeURIComponent(slug)}`;
};

export const getJournalDetailPath = (slug: string): string => {
  return `/journal/${encodeURIComponent(slug)}`;
};

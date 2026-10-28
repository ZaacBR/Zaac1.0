import { View } from './types';

export const SITE_URL = 'https://zaac.com.br';

export const viewPaths: Record<View, string> = {
  home: '/',
  portfolio: '/portfolio',
  about: '/sobre',
  experiences: '/experiencias',
  contact: '/contato',
  'solar-case': '/cases/solar-da-colina',
  'zaac-case': '/cases/zaac-design',
  thanks: '/obrigado',
};

// Páginas que não devem aparecer no Google nem no sitemap
export const noIndexViews: View[] = ['thanks'];

export function viewFromPath(pathname: string): View | null {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const entry = (Object.entries(viewPaths) as [View, string][]).find(([, p]) => p === clean);
  return entry ? entry[0] : null;
}

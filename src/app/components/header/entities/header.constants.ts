import { Header } from '@header/entities/header.interface';

export const headerFeatureName = 'headerModuleState';

export const HEADER_STYLE = {
  BANNER: 'banner',
  BASIC: 'basic',
  NONE: 'none',
};

export const HEADER_TITLES = {
  PORTFOLIO: 'PORTFOLIO',
};

export const HEADER_STYLES: Header[] = [
  {
    classType: HEADER_STYLE.BANNER,
    title: null,
  },
  {
    classType: HEADER_STYLE.BASIC,
    title: null,
  },
  {
    classType: HEADER_STYLE.NONE,
    title: null,
  },
];

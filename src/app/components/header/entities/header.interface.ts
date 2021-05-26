export interface Header {
  classType: string;
  title: string;
  type: string;
}

export type HeaderSelection = Readonly<{
  style: string;
  title: string;
  type: string;
}>;

export enum HeaderType {
  BANNER = 'banner',
  BASIC = 'basic',
  NONE = 'none',
}

export enum HeaderContentType {
  PORTFOLIO = 'portfolio',
  ADMIN = 'admin',
  AUTH = 'auth',
  POKEMON = 'pokemons',
}

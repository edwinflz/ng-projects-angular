export interface Header {
  classType: string;
  title: string;
}

export type HeaderSelection = Readonly<{
  style: string;
  title: string;
}>;

export enum HeaderType {
  BANNER = 'banner',
  BASIC = 'basic',
  NONE = 'none',
}

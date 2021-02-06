export type LocalStorage = Readonly<{
  getItem(item: string): string;
  setItem(key: string, item: string): void;
  removeItem(key: string): void;
  has(key: string): boolean;
}>;

export type SessionStorage = Readonly<{
  getItem(item: string): string;
  setItem(key: string, item: string): void;
  removeItem(key: string): void;
  has(key: string): boolean;
}>;

export interface BrowserProperties {
  browserName: string;
  supportWebp: boolean;
}

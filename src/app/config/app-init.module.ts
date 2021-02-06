import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';

import {
  BrowserProperties,
  LocalStorage,
  SessionStorage,
} from '@core/entities/app.entities';
import { BROWSER_PROPERTIES, IS_BROWSER, IS_MOBILE, LOCAL_STORAGE, SESSION_STORAGE } from '@app/config/tokens/app.tokens';
import { State } from '@store/state/app.state';

export function getLocalStorage(): LocalStorage {
  return {
    getItem(key: string): string {
      return localStorage.getItem(key);
    },

    setItem(key: string, value: string): void {
      localStorage.setItem(key, value);
    },

    removeItem(key: string): void {
      localStorage.removeItem(key);
    },

    has(key: string): boolean {
      return localStorage.getItem(key) ? true : false;
    },
  };
}

export function getSessionStorage(): SessionStorage {
  return {
    getItem(key: string): string {
      return sessionStorage.getItem(key);
    },

    setItem(key: string, value: string): void {
      sessionStorage.setItem(key, value);
    },

    removeItem(key: string): void {
      sessionStorage.removeItem(key);
    },

    has(key: string): boolean {
      return sessionStorage.getItem(key) ? true : false;
    },
  };
}

export function browserProperties(): BrowserProperties {
  const userAgent = navigator.userAgent;

  const browserName =
    userAgent.indexOf('Opera') !== -1
      ? 'Opera'
      : userAgent.indexOf('MSIE') !== -1
      ? 'Microsoft Internet Explorer'
      : userAgent.indexOf('Chrome') !== -1
      ? 'Chrome'
      : userAgent.indexOf('Safari') !== -1
      ? 'Safari'
      : userAgent.indexOf('Firefox') !== -1
      ? 'Firefox'
      : 'unknown';

  const BROWSER_SUPPORT_WEBP = ['Chrome', 'Opera'];

  return {
    browserName,
    supportWebp: BROWSER_SUPPORT_WEBP.includes(browserName),
  };
}

function testRegex(regex: RegExp): boolean {
  return regex.test(navigator.userAgent.toLowerCase());
}

export function isMobile(): boolean {
  const isiPad = testRegex(/ipad/i);
  const isiPod = testRegex(/ipod/i);
  const isWebOS = testRegex(/webos/i);
  const isiPhone = testRegex(/iphone/i);
  const isAndroid = testRegex(/android/i);
  const isiDevice = testRegex(/ipad|iphone|ipod/i);
  const isWindowsPhone = testRegex(/windows phone/i);
  const isSamsungBrowser = testRegex(/SamsungBrowser/i);
  const isMobileSafariBrowser = testRegex(/mobile safari/i);

  return (
    isAndroid ||
    isiPad ||
    isiPhone ||
    isiPod ||
    isiDevice ||
    isWebOS ||
    isWindowsPhone ||
    isSamsungBrowser ||
    isMobileSafariBrowser
  );
}

export function onAppInit(
  document: Document,
  localStorage: LocalStorage,
  store: Store<State>,
  mobile: boolean
// tslint:disable-next-line: ban-types
): () => Promise<Object> {
  // tslint:disable-next-line: ban-types
  return (): Promise<Object> => {
    return Promise.resolve({});
  };
}

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: IS_BROWSER, useValue: true },
    { provide: IS_MOBILE, useFactory: isMobile, deps: [] },
    { provide: LOCAL_STORAGE, useFactory: getLocalStorage, deps: [] },
    { provide: SESSION_STORAGE, useFactory: getSessionStorage, deps: [] },
    { provide: BROWSER_PROPERTIES, useFactory: browserProperties, deps: [] },
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true,
      deps: [
        DOCUMENT,
        LOCAL_STORAGE,
        Store,
        IS_MOBILE,
      ]
    },
  ]
})
export class AppInitModule {}

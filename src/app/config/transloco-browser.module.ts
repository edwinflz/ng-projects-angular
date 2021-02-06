import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TRANSLOCO_LOADER,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';

import { environment as ENV } from '@environment';
import { TranslocoHttpLoader } from '@app/config/translate/transoloco-http.loader';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: [ENV.defaultLocale],
        defaultLang: ENV.defaultLocale,
        missingHandler: {
          logMissingKey: ENV.missingKey,
        },
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
})
export class TranslocoBrowserModule { }

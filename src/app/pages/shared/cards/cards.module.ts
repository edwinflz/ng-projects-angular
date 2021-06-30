import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageModule } from '@shared/image/image.module';

import { CardProjectComponent } from '@shared/cards/card-project/card-project.component';

@NgModule({
  declarations: [CardProjectComponent],
  imports: [
    CommonModule,
    ImageModule
  ],
  exports: [CardProjectComponent]
})
export class CardsModule { }

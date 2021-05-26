import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageModule } from '@shared/image/image.module';

import { CardProjectComponent } from '@shared/cards/card-project/card-project.component';
import { CardPokemonComponent } from '@shared/cards/card-pokemon/card-pokemon.component';

@NgModule({
  declarations: [CardProjectComponent, CardPokemonComponent],
  imports: [
    CommonModule,
    ImageModule
  ],
  exports: [CardProjectComponent, CardPokemonComponent]
})
export class CardsModule { }

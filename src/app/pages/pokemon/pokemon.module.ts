import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChartsModule } from 'ng2-charts';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ImageModule } from '@shared/image/image.module';
import { ModalModule } from '@shared/modal/modal.module';
import { SwipeUpModule } from '@shared/swipe-up/swipe-up.module';

import {
  pokemonFeatureName,
  PokemonState,
} from '@pokemon/store/state/pokemon.state';
import { PokemonEffects } from '@pokemon/store/effects/pokemon.effects';
import { PokemonStore } from '@pokemon/pokemon.store';
import { pokemonRootReducer } from '@pokemon/store/reducers';

import { PokemonRoutingModule } from '@pokemon/pokemon-routing.module';
import { PokemonContainer } from '@pokemon/container/pokemon.container';
import { PaginationComponent } from '@pokemon/components/pagination/pagination.component';
import { PlaceholderComponent } from '@pokemon/components/placeholder/placeholder.component';
import { PokemonDetailComponent } from '@pokemon/components/pokemon-detail/pokemon-detail.component';
import { CardPokemonComponent } from '@pokemon/components/card-pokemon/card-pokemon.component';

export const POKEMON_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<PokemonState>
>('Feature Pokemon Reducers');

@NgModule({
  declarations: [
    PokemonContainer,
    PaginationComponent,
    PlaceholderComponent,
    PokemonDetailComponent,
    CardPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ModalModule,
    SwipeUpModule,
    ImageModule,
    ChartsModule,
    InfiniteScrollModule,
    StoreModule.forFeature(pokemonFeatureName, POKEMON_REDUCER_TOKEN),
    EffectsModule.forFeature([PokemonEffects]),
  ],
  providers: [
    PokemonStore,
    {
      provide: POKEMON_REDUCER_TOKEN,
      useValue: pokemonRootReducer,
    },
  ],
})
export class PokemonModule {}

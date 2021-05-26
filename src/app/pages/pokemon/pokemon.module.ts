import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CardsModule } from '@shared/cards/cards.module';

import { pokemonFeatureName, PokemonState } from '@pokemon/store/state/pokemon.state';
import { PokemonEffects } from '@pokemon/store/effects/pokemon.effects';
import { PokemonStore } from '@pokemon/pokemon.store';
import { pokemonRootReducer } from '@pokemon/store/reducers';

import { PokemonRoutingModule } from '@pokemon/pokemon-routing.module';
import { PokemonContainer } from '@pokemon/container/pokemon.container';

export const POKEMON_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<PokemonState>
>('Feature Pokemon Reducers');

@NgModule({
  declarations: [PokemonContainer],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    CardsModule,
    StoreModule.forFeature(pokemonFeatureName, POKEMON_REDUCER_TOKEN),
    EffectsModule.forFeature([PokemonEffects]),
  ],
  providers: [
    PokemonStore,
    {
      provide: POKEMON_REDUCER_TOKEN,
      useValue: pokemonRootReducer,
    },
  ]
})
export class PokemonModule {}

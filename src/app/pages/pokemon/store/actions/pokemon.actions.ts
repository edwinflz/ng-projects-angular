import { createAction, props } from '@ngrx/store';
import { type } from '@app/utils/type-action';
import {
  Pokemon,
  PokemonPayload,
  PokemonResult,
} from '@core/entities/pokemon.interface';

export const fetchPokemonDataAction = createAction(
  type('[Pokemon/API] fetch pokemons data'),
  props<{ payload: PokemonPayload }>()
);
export const fetchPokemonByIdDataAction = createAction(
  type('[Pokemon/API] fetch pokemon data'),
  props<{ payload: string }>()
);
export const fetchPokemonByUrlDataAction = createAction(
  type('[Pokemon/API] fetch list pokemon data'),
  props<{ payload: string[] }>()
);
export const loadPokemonsDataSuccess = createAction(
  type('[Pokemon/API] Load pokemons data success'),
  props<{ pokemonResult: PokemonResult }>()
);
export const loadPokemonDataSuccess = createAction(
  type('[Pokemon/API] Load pokemon data success'),
  props<{ pokemon: Pokemon }>()
);
export const loadListPokemonDataSuccess = createAction(
  type('[Pokemon/API] Load list pokemon data success'),
  props<{ pokemons: Pokemon[]; isMobile: boolean }>()
);
export const errorDataAction = createAction(
  type('[Pokemon/API] Error data api')
);

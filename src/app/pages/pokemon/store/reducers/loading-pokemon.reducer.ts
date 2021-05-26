import { Action, createReducer, on } from '@ngrx/store';

import {
  fetchPokemonByIdDataAction,
  fetchPokemonByUrlDataAction,
  fetchPokemonDataAction,
  loadListPokemonDataSuccess,
  loadPokemonDataSuccess,
  loadPokemonsDataSuccess,
} from '@pokemon/store/actions/pokemon.actions';

export const initialState: boolean = false;

const featureReducer = createReducer(
  initialState,
  on(fetchPokemonDataAction, () => true),
  on(fetchPokemonByIdDataAction, () => true),
  on(fetchPokemonByUrlDataAction, () => true),
  on(loadPokemonsDataSuccess, () => false),
  on(loadPokemonDataSuccess, () => false),
  on(loadListPokemonDataSuccess, () => false)
);

export function pokemonLoadingReducer(state: boolean, action: Action): boolean {
  return featureReducer(state, action);
}

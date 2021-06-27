import { Action, createReducer, on } from '@ngrx/store';

import {
  fetchPokemonByUrlDataAction,
  fetchPokemonDataAction,
  loadListPokemonDataSuccess,
  loadPokemonsDataSuccess,
} from '@pokemon/store/actions/pokemon.actions';

export const initialState: boolean = false;

const featureReducer = createReducer(
  initialState,
  on(fetchPokemonDataAction, () => true),
  on(fetchPokemonByUrlDataAction, () => true),
  on(loadPokemonsDataSuccess, () => false),
  on(loadListPokemonDataSuccess, () => false)
);

export function pokemonLoadingReducer(state: boolean, action: Action): boolean {
  return featureReducer(state, action);
}

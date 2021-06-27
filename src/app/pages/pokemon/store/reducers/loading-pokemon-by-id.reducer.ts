import { Action, createReducer, on } from '@ngrx/store';

import {
  fetchPokemonByIdDataAction,
  loadPokemonDataSuccess,
} from '@pokemon/store/actions/pokemon.actions';

export const initialState: boolean = false;

const featureReducer = createReducer(
  initialState,
  on(fetchPokemonByIdDataAction, () => true),
  on(loadPokemonDataSuccess, () => false),
);

export function pokemonLoadingByIdReducer(state: boolean, action: Action): boolean {
  return featureReducer(state, action);
}

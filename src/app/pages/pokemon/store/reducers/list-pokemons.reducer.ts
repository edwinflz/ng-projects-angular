import { Action, createReducer, on } from '@ngrx/store';

import { loadListPokemonDataSuccess } from '@pokemon/store/actions/pokemon.actions';
import { Pokemon } from '@core/entities/pokemon.interface';

export const initialState: Pokemon[] = [];

const featureReducer = createReducer(
  initialState,
  on(loadListPokemonDataSuccess, (state, { pokemons }) => {
    return pokemons;
  })
);

export const listPokemonDataReducer = (
  state: Pokemon[],
  action: Action
): Pokemon[] => {
  return featureReducer(state, action);
};

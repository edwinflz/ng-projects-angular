import { Action, createReducer, on } from '@ngrx/store';

import { loadPokemonDataSuccess } from '@pokemon/store/actions/pokemon.actions';
import { Pokemon } from '@core/entities/pokemon.interface';

export const initialState: Pokemon = {} as Pokemon;

const featureReducer = createReducer(
  initialState,
  on(loadPokemonDataSuccess, (state, { pokemon }) => {
    return pokemon;
  })
);

export const pokemonDataReducer = (
  state: Pokemon,
  action: Action
): Pokemon => {
  return featureReducer(state, action);
};

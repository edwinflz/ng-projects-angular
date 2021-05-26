import { Action, createReducer, on } from '@ngrx/store';

import { loadPokemonsDataSuccess } from '@pokemon/store/actions/pokemon.actions';
import { PokemonResult } from '@core/entities/pokemon.interface';

export const initialState: PokemonResult = {} as PokemonResult;

const featureReducer = createReducer(
  initialState,
  on(loadPokemonsDataSuccess, (state, { pokemonResult }) => {
    return pokemonResult;
  })
);

export const pokemonsDataReducer = (
  state: PokemonResult,
  action: Action
): PokemonResult => {
  return featureReducer(state, action);
};

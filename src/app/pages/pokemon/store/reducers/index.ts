import { combineReducers } from '@ngrx/store';

import { pokemonsDataReducer as pokemonPaging } from '@pokemon/store/reducers/pokemons.reducer';
import { pokemonDataReducer as pokemon } from '@pokemon/store/reducers/pokemon.reducer';
import { pokemonLoadingReducer as pokemonLoading } from '@pokemon/store/reducers/loading-pokemon.reducer';
import { pokemonLoadingByIdReducer as pokemonByIdLoading } from '@pokemon/store/reducers/loading-pokemon-by-id.reducer';
import { listPokemonDataReducer as pokemonList } from '@pokemon/store/reducers/list-pokemons.reducer';

export const pokemonRootReducer = combineReducers({
  pokemonLoading,
  pokemonByIdLoading,
  pokemonPaging,
  pokemonList,
  pokemon
});

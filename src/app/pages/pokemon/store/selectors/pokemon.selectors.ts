import { createFeatureSelector } from '@ngrx/store';

import { pokemonFeatureName, PokemonState } from '@pokemon/store/state/pokemon.state';

export const pokemonRootSelector = createFeatureSelector<PokemonState>(
    pokemonFeatureName
);

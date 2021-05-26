import { Pokemon, PokemonResult } from '@core/entities/pokemon.interface';

export const pokemonFeatureName = 'pokemonModuleState';

export type PokemonState = Readonly<{
    pokemonLoading: boolean,
    pokemonPaging: PokemonResult,
    pokemonList: Pokemon[],
    pokemon: Pokemon,
}>;

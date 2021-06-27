import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from '@store/state/app.state';

import {
  Pokemon,
  PokemonPayload,
  PokemonResult,
} from '@app/core/entities/pokemon.interface';
import { pokemonRootSelector } from '@pokemon/store/selectors/pokemon.selectors';
import {
  fetchPokemonByIdDataAction,
  fetchPokemonDataAction,
} from '@pokemon/store/actions/pokemon.actions';

@Injectable()
export class PokemonStore {

  constructor(private store: Store<State>) {}

  public pokemonPaging$: Observable<PokemonResult> = this.store.pipe(
    select(pokemonRootSelector),
    map((state) => state.pokemonPaging)
  );

  public pokemons$: Observable<Pokemon[]> = this.store.pipe(
    select(pokemonRootSelector),
    map((state) => state.pokemonList)
  );

  public pokemon$: Observable<Pokemon> = this.store.pipe(
    select(pokemonRootSelector),
    map((state) => state.pokemon)
  );

  public pokemonLoading$: Observable<boolean> = this.store.pipe(
    select(pokemonRootSelector),
    map((state) => state.pokemonLoading)
  );

  public pokemonByIdLoading$: Observable<boolean> = this.store.pipe(
    select(pokemonRootSelector),
    map((state) => state.pokemonByIdLoading)
  );

  public fetchPokemons(payload: PokemonPayload): void {
    this.store.dispatch(fetchPokemonDataAction({ payload }));
  }

  public fetchPokemonById(payload: string): void {
    this.store.dispatch(fetchPokemonByIdDataAction({ payload }));
  }
}

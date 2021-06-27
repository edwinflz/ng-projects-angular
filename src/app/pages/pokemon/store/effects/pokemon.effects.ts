import { Injectable } from '@angular/core';
import { Observable, EMPTY, forkJoin } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  fetchPokemonByIdDataAction,
  fetchPokemonByUrlDataAction,
  fetchPokemonDataAction,
  loadListPokemonDataSuccess,
  loadPokemonDataSuccess,
  loadPokemonsDataSuccess,
} from '@pokemon/store/actions/pokemon.actions';

import { PokemonService } from '@core/services/api/pokemon.service';

@Injectable()
export class PokemonEffects {

  constructor(
    private action$: Actions,
    private pokemonService: PokemonService
  ) {}

  fetchPokemonsData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(fetchPokemonDataAction),
      switchMap(({ payload }) => this.pokemonService.getAllPokemons(payload).pipe(
        switchMap(response => {
          return [
            loadPokemonsDataSuccess({ pokemonResult: response }),
            fetchPokemonByUrlDataAction({payload: response.results.map(item => item.url)})
          ];
        }),
        catchError(() => {
          return EMPTY;
        })
      ))
    )
  );

  fetchListPokemonData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(fetchPokemonByUrlDataAction),
      switchMap(({ payload }) => {
        return forkJoin(
          payload.map(url => this.pokemonService.getPokemonByUrl(url))
        );
      }),
      map((response) => loadListPokemonDataSuccess({pokemons: response})),
      catchError(() => {
        return EMPTY;
      })
    )
  );

  fetchPokemonData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(fetchPokemonByIdDataAction),
      switchMap(({ payload }) => this.pokemonService.getPokemonById(payload)),
      map((response) => loadPokemonDataSuccess({ pokemon: response })),
    )
  );
}

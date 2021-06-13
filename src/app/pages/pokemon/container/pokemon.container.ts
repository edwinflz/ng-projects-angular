import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Pokemon,
  PokemonPayload,
  PokemonResult,
} from '@core/entities/pokemon.interface';
import { PokemonStore } from '@pokemon/pokemon.store';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.container.html',
  styleUrls: ['./pokemon.container.scss'],
})
export class PokemonContainer implements OnInit {

  public paging: PokemonPayload = {
    offset: 0,
    limit: 20,
  };

  constructor(private pokemonStore: PokemonStore) {}

  ngOnInit(): void {
    this.pokemonStore.fetchPokemons(this.paging);
  }

  get pokemonLoading$(): Observable<boolean> {
    return this.pokemonStore.pokemonLoading$;
  }

  get pokemonPaging$(): Observable<PokemonResult> {
    return this.pokemonStore.pokemonPaging$;
  }

  get pokemonList$(): Observable<Pokemon[]> {
    return this.pokemonStore.pokemons$;
  }

  public setPaging(offset: number): void {
     this.paging = {...this.paging, offset};
     this.pokemonStore.fetchPokemons(this.paging);
  }
}

import { Component, OnInit } from '@angular/core';
import {
  Pokemon,
  PokemonPayload,
} from '@app/core/entities/pokemon.interface';
import { PokemonStore } from '@pokemon/pokemon.store';
import { Observable } from 'rxjs';

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

  get pokemonList$(): Observable<Pokemon[]> {
    return this.pokemonStore.pokemons$;
  }
}

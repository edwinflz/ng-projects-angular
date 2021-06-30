import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Pokemon,
  PokemonPayload,
  PokemonResult,
} from '@core/entities/pokemon.interface';
import { PokemonStore } from '@pokemon/pokemon.store';
import { MobileService } from '@core/services/mobile.service';
import { PaginationService } from '@core/services/pagination.service';

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
  public openPokemon: boolean = false;

  constructor(
    private pokemonStore: PokemonStore,
    private mobileDeviceService: MobileService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.pokemonStore.fetchPokemons(this.paging);
  }

  get pokemonLoading$(): Observable<boolean> {
    return this.pokemonStore.pokemonLoading$;
  }

  get pokemonByIdLoading$(): Observable<boolean> {
    return this.pokemonStore.pokemonLoading$;
  }

  get pokemonPaging$(): Observable<PokemonResult> {
    return this.pokemonStore.pokemonPaging$;
  }

  get pokemonList$(): Observable<Pokemon[]> {
    return this.pokemonStore.pokemons$;
  }

  get pokemon$(): Observable<Pokemon> {
    return this.pokemonStore.pokemon$;
  }

  get isMobile$(): Observable<boolean> {
    return this.mobileDeviceService.isMobileDevice$;
  }

  get currentPage(): number {
    return this.paginationService.getCurrentPage;
  }

  public setPaging(offset: number): void {
    this.paging = { ...this.paging, offset };
    this.pokemonStore.fetchPokemons(this.paging);
  }

  public closeModalPokemon(event: boolean): void {
    this.openPokemon = event;
  }

  public searchPokemonById(pokemonId: string): void {
    this.pokemonStore.fetchPokemonById(pokemonId);
    this.openPokemon = true;
  }

  public scrollResults(): void {
    this.pokemonPaging$.subscribe((paging) => {
      if (!!paging && paging.count) {
        const page = this.currentPage + 1;
        this.paginationService.buildPage(paging.count, page, this.paging.limit);
        this.setPaging(this.paginationService.getOffSet);
      }
    }).unsubscribe();
  }
}

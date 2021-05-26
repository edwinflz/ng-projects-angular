import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as urlTemplate from 'url-template';
import { environment as ENV } from '@environment';

import {
  Pokemon,
  PokemonPayload,
  PokemonResult,
} from '@app/core/entities/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  public getAllPokemons(payload: PokemonPayload): Observable<PokemonResult> {
    const url = urlTemplate.parse(ENV.pokeApi.paging).expand({
      offset: payload.offset,
      limit: payload.limit,
    });
    return this.http.get<PokemonResult>(url);
  }

  public getPokemonById(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}

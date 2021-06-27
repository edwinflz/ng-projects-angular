import { ThrowStmt } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TypeImage } from '@app/core/entities/image.entities';
import { Pokemon, POKEMON_COLOR } from '@core/entities/pokemon.interface';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent {

  @Input() loadingPokemon: boolean;
  @Input() set pokemon(value: Pokemon) {
    this._pokemon = value;
    if (!!this._pokemon && !!this._pokemon.id) {
      this.setColorTypePokemon(this._pokemon);
      this.setSpritePokemon(this._pokemon);
      this.setStatsPokemon(this._pokemon);
    }
  }

  get pokemon(): Pokemon {
    return this._pokemon;
  }

  get hasDefault(): boolean {
    return !!this.pokemon?.sprites?.front_default;
  }

  get hasShiny(): boolean {
    return !!this.pokemon?.sprites?.front_shiny;
  }

  public typeImage: string = TypeImage.POKEMON_DETAIL;
  public url: string;
  public default: boolean;
  public pokemonTypes = [];
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [
    'hp',
    'attack',
    'defense',
    'special attack',
    'special defense',
    'speed',
  ];

  public radarChartData: ChartDataSets[] = [{ data: [], label: '' }];
  public radarChartType: ChartType = 'radar';

  private _pokemon: Pokemon;
  private toggle: boolean = true;

  constructor() {}

  public setColorTypePokemon(pokemon: Pokemon): void {
    this.pokemonTypes = [];
    pokemon.types.forEach(({ type: { name } }) => {
      const style: { [key: string]: string } = {};
      style['background-color'] = `var(--${
        POKEMON_COLOR.find((pokemonType) => pokemonType.type === name)?.type
      })`;
      this.pokemonTypes.push({ name, style });
    });
  }

  public setSpritePokemon(pokemon: Pokemon): void {
    this.default = true;
    this.url = '';
    if (this.hasDefault) this.url = pokemon.sprites.front_default;
    else if (this.hasShiny) this.url = pokemon.sprites.front_shiny;
  }

  public setStatsPokemon(pokemon: Pokemon): void {
    this.radarChartData = [{ data: [], label: '' }];
    pokemon.stats.forEach(({base_stat}) => this.radarChartData[0].data.push(base_stat));
    this.radarChartData[0].label = pokemon.name;
  }

  public changeImage(): void {
    if (this.default) this.configImageDefault();
    else this.configImageShiny();
  }

  public configImageDefault(): void {
    this.setImageDefault();
    this.changeToggle();
  }

  public configImageShiny(): void {
    if (this.hasShiny) {
      this.setImageShiny();
      this.changeToggle();
    }
  }

  public setImageDefault(): void {
    this.toggle
      ? (this.url = this.pokemon.sprites.back_default)
      : (this.url = this.pokemon.sprites.front_default);
  }

  public setImageShiny(): void {
    this.toggle
      ? (this.url = this.pokemon.sprites.back_shiny)
      : (this.url = this.pokemon.sprites.front_shiny);
  }

  public changeToggle(): void {
    this.toggle = !this.toggle;
  }

  public resetImage(isShiny: boolean): void {
    if (isShiny && this.hasShiny) {
      this.toggle = false;
      this.default = false;
      this.changeImage();
    }
    if (!isShiny) {
      this.toggle = false;
      this.default = true;
      this.changeImage();
    }
  }
}

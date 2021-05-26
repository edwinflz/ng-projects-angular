import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TypeImage } from '@core/entities/image.entities';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPokemonComponent {

  @Input() id: number;
  @Input() name: string;
  @Input() image: string;
  @Input() type: string;

  public typeImage: string = TypeImage.POKEMON;

  constructor() { }

}

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
  public loadImage: boolean = false;

  constructor() { }

  get isLoadImage(): boolean {
    return this.loadImage;
  }

  public changeLoadImage(flag: boolean): void {
    this.loadImage = flag;
  }

}

import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { TypeImage } from '@core/entities/image.entities';
import { IMAGE_NOT_FOUND } from '@core/constants/ux.constant';
import { imageLazy } from '@shared/animations/image-lazy.animations';

const HIDE = 'hide-image';
const SHOW = 'show-image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [imageLazy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent  {

  @Input() width: string;
  @Input() height: string;
  @Input() rounded: boolean = true;
  @Input() url: string;
  @Input() type: string = '';
  @Output() sendloadImage: EventEmitter<boolean> = new EventEmitter();

  public imageCtrl: string = HIDE;
  public contentCtrl: string = SHOW;
  public destroy: boolean = false;
  public imgLoading: string = IMAGE_NOT_FOUND;

  constructor() { }

  public loadImage(): void {
    this.imageCtrl = SHOW;
    this.contentCtrl = HIDE;
    this.destroy = true;
    this.sendloadImage.emit(true);
  }

  public errorHandler(): void {
    this.url = IMAGE_NOT_FOUND;
    this.type = TypeImage.NOT_FOUND;
  }

}

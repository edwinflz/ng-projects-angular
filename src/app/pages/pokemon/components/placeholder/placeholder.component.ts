import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholderComponent {

  @Input() type: number = 1;
  @Input() isMobile: boolean;

  constructor() {}

  get isTypeDefault(): boolean {
    return this.type === 1;
  }
}

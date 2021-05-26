import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const imageLazy = trigger('imageAnimation', [
  state(
    'show-image',
    style({
      opacity: '1',
    })
  ),
  state(
    'hide-image',
    style({
      opacity: '0',
    })
  ),
  transition('show-image <=> hide-image', animate('300ms ease-in')),
]);

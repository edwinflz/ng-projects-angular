import { createAction, props } from '@ngrx/store';
import { HeaderSelection } from '@header/entities/header.interface';
import { type } from '@utils/type-action';

export const setHeaderStyleAction = createAction(
  type('[Header/Data] Set Header Style'),
  props<{ selection: HeaderSelection }>()
);


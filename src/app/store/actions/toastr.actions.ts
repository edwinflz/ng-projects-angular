import { createAction, props } from '@ngrx/store';
import { type } from '@utils/type-action';
import { Toastr } from '@core/entities/toastr.interface';

export const fetchMessageAction = createAction(type('[Global/Toastr] Fetch message toast'),
  props<{ toastr: Toastr }>());
export const fetchMessageSuccessAction = createAction(type('[Global/Toastr] Fetch message toast succes'));

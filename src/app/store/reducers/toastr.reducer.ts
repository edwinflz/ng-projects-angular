import { Action, createReducer, on } from '@ngrx/store';
import { fetchMessageAction } from '@store/actions';

export const initialState: string = null;

const featureReducer = createReducer(
  initialState,
  on(fetchMessageAction, (state, { toastr }) => {
    return toastr.message;
  })
);

export function toastrReducer(state: string, action: Action): string {
  return featureReducer(state, action);
}
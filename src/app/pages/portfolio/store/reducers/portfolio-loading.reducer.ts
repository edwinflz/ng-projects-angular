import { Action, createReducer, on } from '@ngrx/store';
import {
  fetchProjectsDataAction,
  loadProjectsDataSuccess,
} from '@portfolio/store//actions/portfolio.actions';

export const initialState: boolean = false;

const featureReducer = createReducer(
  initialState,
  on(fetchProjectsDataAction, () => true),
  on(loadProjectsDataSuccess, () => false)
);

export function portfolioLoadingReducer(state: boolean, action: Action): boolean {
  return featureReducer(state, action);
}

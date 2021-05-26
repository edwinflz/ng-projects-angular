import { Action, createReducer, on } from '@ngrx/store';
import { Project } from '@core/entities/portfolio.interface';
import { loadProjectsDataSuccess } from '@portfolio/store/actions/portfolio.actions';

export const initialState: Project[] = [];

const featureReducer = createReducer(
  initialState,
  on(loadProjectsDataSuccess, (state, { projects }) => {
    return projects;
  })
);

export const projectDataReducer = (
  state: Project[],
  action: Action
): Project[] => {
  return featureReducer(state, action);
};

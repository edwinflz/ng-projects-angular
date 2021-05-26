import { createAction, props } from '@ngrx/store';
import { type } from '@utils/type-action';
import { Project } from '@core/entities/portfolio.interface';

export const fetchProjectsDataAction = createAction(
  type('[Portfolio/API] fetch projects data')
);
export const loadProjectsDataSuccess = createAction(
  type('[Portfolio/API] Load prjects data success'),
  props<{ projects: Project[] }>()
);

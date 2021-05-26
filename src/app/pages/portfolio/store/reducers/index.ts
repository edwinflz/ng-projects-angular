import { combineReducers } from '@ngrx/store';
import { portfolioLoadingReducer as portfolioLoading } from '@portfolio/store/reducers/portfolio-loading.reducer';
import { projectDataReducer as projects } from '@portfolio/store/reducers/portfolio.reducer';

export const portfolioRootReducer = combineReducers({
  portfolioLoading,
  projects,
});

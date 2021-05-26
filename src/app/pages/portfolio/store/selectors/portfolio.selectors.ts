import { createFeatureSelector } from '@ngrx/store';
import {
  portfolioFeatureName,
  PortfolioState,
} from '@portfolio/store/state/portfolio.state';

export const portfolioRootSelector = createFeatureSelector<PortfolioState>(
  portfolioFeatureName
);

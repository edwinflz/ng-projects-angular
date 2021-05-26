import { Project } from '@core/entities/portfolio.interface';

export const portfolioFeatureName = 'portfolioModuleState';

export type PortfolioState = Readonly<{
  portfolioLoading: boolean;
  projects: Project[];
}>;

import { headerFeatureName } from '@header/entities/header.constants';
import { portfolioFeatureName, PortfolioState } from '@portfolio/store/state/portfolio.state';
import { HeaderState } from '@header/store/state/header.state';
import { User } from '@core/entities/user.interface';


export type State = Readonly<{
  user: User,
  [headerFeatureName]: HeaderState;
  [portfolioFeatureName]: PortfolioState
}>;

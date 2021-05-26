import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CardsModule } from '@shared/cards/cards.module';

import { PortfolioRoutingModule } from '@portfolio/portfolio-routing.module';
import { portfolioFeatureName, PortfolioState } from '@portfolio/store/state/portfolio.state';
import { PortfolioEffects } from '@portfolio/store/effects/portfolio.effects';
import { PortFolioStore } from '@portfolio/portfolio.store';
import { portfolioRootReducer } from '@portfolio/store/reducers';
import { PortfolioContainer } from '@portfolio/container/portfolio.container';

export const PORTFOLIO_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<PortfolioState>
>('Feature Portfolio Reducers');

@NgModule({
  declarations: [PortfolioContainer],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    TranslocoModule,
    CardsModule,
    StoreModule.forFeature(portfolioFeatureName, PORTFOLIO_REDUCER_TOKEN),
    EffectsModule.forFeature([PortfolioEffects]),
  ],
  providers: [
    PortFolioStore,
    {
      provide: PORTFOLIO_REDUCER_TOKEN,
      useValue: portfolioRootReducer,
    },
  ]
})
export class PortfolioModule { }

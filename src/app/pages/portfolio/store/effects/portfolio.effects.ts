import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { PortfolioService } from '@core/services/api/portfolio.service';
import {
  fetchProjectsDataAction,
  loadProjectsDataSuccess,
} from '@portfolio/store/actions/portfolio.actions';

@Injectable()
export class PortfolioEffects {
  constructor(
    private action$: Actions,
    private portfolioService: PortfolioService
  ) {}

  fetchProjectsData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(fetchProjectsDataAction),
      switchMap(() => this.portfolioService.fetchAllProjects()),
      map((projects) => loadProjectsDataSuccess({ projects })),
      catchError(() => {
        return EMPTY;
      })
    )
  );
}

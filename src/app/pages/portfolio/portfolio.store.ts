import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from '@store/state/app.state';

import { Project } from '@core/entities/portfolio.interface';
import { portfolioRootSelector } from '@portfolio/store/selectors/portfolio.selectors';
import { fetchProjectsDataAction } from '@portfolio/store/actions/portfolio.actions';

@Injectable()
export class PortFolioStore {
  constructor(private store: Store<State>) {}

  public projectsData$: Observable<Project[]> = this.store.pipe(
    select(portfolioRootSelector),
    map((state) => state.projects)
  );

  public portfolioLoading$: Observable<boolean> = this.store.pipe(
    select(portfolioRootSelector),
    map((state) => state.portfolioLoading)
  );

  public fetchProjects(): void {
    this.store.dispatch(fetchProjectsDataAction());
  }
}

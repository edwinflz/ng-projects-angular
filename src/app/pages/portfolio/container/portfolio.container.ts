import { Component, OnInit } from '@angular/core';
import { Project } from '@core/entities/portfolio.interface';
import { PortFolioStore } from '@portfolio/portfolio.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.container.html',
  styleUrls: ['./portfolio.container.scss'],
})
export class PortfolioContainer implements OnInit {

  constructor(private portfolioStore: PortFolioStore) {}

  ngOnInit(): void {
    this.portfolioStore.fetchProjects();
  }

  get projects$(): Observable<Project[]> {
    return this.portfolioStore.projectsData$;
  }

  get portfolioLoading$(): Observable<boolean> {
    return this.portfolioStore.portfolioLoading$;
  }
}

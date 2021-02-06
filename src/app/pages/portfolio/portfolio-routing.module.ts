import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioContainer } from '@portfolio/container/portfolio.container';

export const portfolioRoot = '';

const routes: Routes = [
  {
    path: '',
    component: PortfolioContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }

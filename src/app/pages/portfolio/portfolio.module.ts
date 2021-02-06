import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from '@portfolio/portfolio-routing.module';
import { PortfolioContainer } from '@portfolio/container/portfolio.container';


@NgModule({
  declarations: [PortfolioContainer],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }

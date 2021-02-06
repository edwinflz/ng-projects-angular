import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HEADER_STYLE, HEADER_TITLES } from '@header/entities/header.constants';

import { formRoot } from '@forms/forms-routing.module';
import { portfolioRoot } from '@portfolio/portfolio-routing.module';

const routes: Routes = [
  {
    path: portfolioRoot,
    loadChildren: () =>
      import('./pages/portfolio/portfolio.module').then((m) => m.PortfolioModule),
    data: {
      header_style: {
        style: HEADER_STYLE.BANNER,
        title: HEADER_TITLES.PORTFOLIO,
      },
    },
  },
  {
    path: formRoot,
    loadChildren: () =>
      import('./pages/forms/forms.module').then((m) => m.FormsModule),
  },
  { path: '**', redirectTo: portfolioRoot },
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        relativeLinkResolution: 'corrected',
      }),
    ],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

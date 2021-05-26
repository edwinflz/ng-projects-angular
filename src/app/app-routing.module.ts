import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HEADER_STYLE, HEADER_TITLES } from '@header/entities/header.constants';
import { HeaderContentType } from '@header/entities/header.interface';
import {
  authRoot,
  formRoot,
  pokemonRoot,
  portfolioRoot,
} from '@core/constants/routes.constant';

const routes: Routes = [
  {
    path: portfolioRoot,
    loadChildren: () =>
      import('./pages/portfolio/portfolio.module').then(
        (m) => m.PortfolioModule
      ),
    data: {
      header_style: {
        style: HEADER_STYLE.NONE,
        title: HEADER_TITLES.PORTFOLIO,
        type: HeaderContentType.PORTFOLIO,
      },
    },
  },
  {
    path: authRoot,
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    data: {
      header_style: {
        style: HEADER_STYLE.NONE,
        title: HEADER_TITLES.AUTH,
        type: HeaderContentType.AUTH,
      },
    },
  },
  {
    path: formRoot,
    loadChildren: () =>
      import('./pages/forms/forms.module').then((m) => m.FormsModule),
  },
  {
    path: pokemonRoot,
    loadChildren: () =>
      import('./pages/pokemon/pokemon.module').then(m => m.PokemonModule),
      data: {
        header_style: {
          style: HEADER_STYLE.BASIC,
          title: HEADER_TITLES.POKEMON,
          type: HeaderContentType.POKEMON,
        },
      },
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

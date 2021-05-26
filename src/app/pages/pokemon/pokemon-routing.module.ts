import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonContainer } from '@pokemon/container/pokemon.container';

const routes: Routes = [
  {
    path: '',
    component: PokemonContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }

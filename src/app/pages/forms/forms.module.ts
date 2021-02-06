import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from '@forms/forms-routing.module';
import { FormsContainerComponent } from '@forms/container/forms-container.container';


@NgModule({
  declarations: [FormsContainerComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }

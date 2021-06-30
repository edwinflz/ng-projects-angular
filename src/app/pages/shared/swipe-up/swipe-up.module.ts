import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipeUpComponent } from '@shared/swipe-up/swipe-up.component';

@NgModule({
  declarations: [SwipeUpComponent],
  imports: [
    CommonModule
  ],
  exports: [SwipeUpComponent]
})
export class SwipeUpModule { }

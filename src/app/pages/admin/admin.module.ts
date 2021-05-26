import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from '@admin/admin-routing.module';
import { AdminContainer} from '@admin/layout/admin.container';


@NgModule({
  declarations: [AdminContainer],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

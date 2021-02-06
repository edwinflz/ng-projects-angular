import { Injectable } from '@angular/core';
import { Toastr, ToastrTypes } from '@core/entities/toastr.interface';
import { ToastrService as ToastService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  private timeOut: number = 3000;
  constructor(private toastService: ToastService) {}

  public toggleToastr(toastr: Toastr): void {
    if (toastr.justOne) {
      this.toastService.clear();
    }
    this.toggleToastrByType(toastr);
  }

  private toggleToastrByType(toastr: Toastr): void {
    switch (toastr.type) {
      case ToastrTypes.ERROR:
        this.toastService.error(toastr.message, toastr.title, {
          timeOut: toastr.timeOut || this.timeOut,
        });
        break;
      case ToastrTypes.INFO:
        this.toastService.info(toastr.message, toastr.title);
        break;
      case ToastrTypes.SUCCESS:
        this.toastService.success(toastr.message, toastr.title);
        break;
      case ToastrTypes.WARNING:
        this.toastService.warning(toastr.message, toastr.title);
        break;
    }
  }
}

import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { Pokemon } from '@app/core/entities/pokemon.interface';
import { DomManipulateService } from '@core/services/dom-manipulate.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges, OnDestroy  {

  @Input() isActive: boolean = false;
  @Input() width: number = 1000;
  @Input() classType: string = '';
  @Output()
  closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  public fadeOut: boolean = false;
  public showModal: boolean = false;

  constructor(
    private domManipulateService: DomManipulateService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isActive.currentValue) {
      this.showModal = true;
      this.domManipulateService.setBodyScroll(false);
      this.fadeOut = false;
    } else {
      this.fadeOut = true;
      this.showModal = false;
      this.domManipulateService.setBodyScroll(true);
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.domManipulateService.setBodyScroll(true);
  }

  get widthPx(): string {
    return `${this.width}px`;
  }

  public toggleModal(): void {
    this.closeModal.emit(false);
  }

}

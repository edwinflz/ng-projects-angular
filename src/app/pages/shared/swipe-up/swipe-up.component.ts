import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DomManipulateService } from '@core/services/dom-manipulate.service';

@Component({
  selector: 'app-swipe-up',
  templateUrl: './swipe-up.component.html',
  styleUrls: ['./swipe-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwipeUpComponent implements OnChanges, OnDestroy {

  @Input() height: number = 50;
  @Input() overflowY?: string;
  @Input() showSwipeUp: boolean = false;
  @Input() classType: string = '';

  @Output() toggleShowSwipeUp: EventEmitter<boolean> = new EventEmitter();

  public isActive: boolean = false;
  public fadeOut: boolean = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private domManipulateService: DomManipulateService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    !!changes.showSwipeUp.currentValue
      ? this.activeSwipeUp()
      : this.hiddenSwipeUp();
  }

  ngOnDestroy(): void {
    this.domManipulateService.setBodyScroll(true);
  }

  get heightVh(): string {
    return `${this.height}vh`;
  }

  public toggleModal(): void {
    this.toggleShowSwipeUp.emit(false);
    this.domManipulateService.setBodyScroll(true);
  }

  public activeSwipeUp(): void {
    this.isActive = true;
    this.fadeOut = false;
    this.domManipulateService.setBodyScroll(false);
  }

  public hiddenSwipeUp(): void {
    this.isActive = false;
    this.fadeOut = true;
    this.domManipulateService.setBodyScroll(true);
    this.changeDetectorRef.detectChanges();
  }
}

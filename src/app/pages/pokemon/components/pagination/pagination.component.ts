import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DomManipulateService } from '@core/services/dom-manipulate.service';
import { PaginationService } from '@core/services/pagination.service';
import { Paginator } from '@core/entities/pagination.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() totalRows: number;
  @Input() rowsPerPage: number;
  @Input() blockPaging: boolean = false;
  @Output() emitOffset: EventEmitter<number> = new EventEmitter();

  public paginator: Paginator = {} as Paginator;
  public currentPage: number = 1;

  constructor(
    private paginationService: PaginationService,
    private domManipulateService: DomManipulateService
  ) {}

  get hasPaginator(): boolean {
    return !!this.paginator.pages && this.paginator.pages.length > 0;
  }

  get isFirstPage(): boolean {
    return this.paginationService.getCurrentPage === 1;
  }

  get isLastPage(): boolean {
    return this.paginationService.getCurrentPage === this.paginator.totalPages;
  }

  get isGreaterThanLimit(): boolean {
    return this.paginator.totalPages - this.paginator.startPage > 5;
  }

  get totalResults(): number {
    return this.rowsPerPage * (this.paginationService.getCurrentPage - 1) + 1;
  }

  get currentResults(): number {
    return this.paginationService.getCurrentPage < this.paginator.totalPages
      ? this.rowsPerPage * this.paginationService.getCurrentPage
      : this.totalRows;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      !!changes &&
      ((changes.rowsPerPage && !changes.rowsPerPage.firstChange) ||
        (changes.totalRows && !changes.totalRows.firstChange))
    ) {
      this.paginator = this.paginationService.buildPage(this.totalRows, this.currentPage, this.rowsPerPage);
    }
  }

  ngOnInit(): void {
    this.currentPage = this.paginationService.getCurrentPage;
    this.paginator = this.paginationService.buildPage(this.totalRows, this.currentPage, this.rowsPerPage);
  }

  public setPage(page: number): void {
    if (page < 1 || page > this.paginator.totalPages || this.blockPaging) return;
    this.domManipulateService.restoreScroll();
    this.paginator = this.paginationService.buildPage(this.totalRows, page, this.rowsPerPage);
    this.emitOffset.emit(this.paginationService.getOffSet);
  }

}

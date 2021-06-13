import { Injectable } from '@angular/core';
import { Paginator } from '@core/entities/pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private currentPage: number = 1;
  private offSet: number = 0;

  constructor() {}

  get getCurrentPage(): number {
    return this.currentPage;
  }

  get getOffSet(): number {
    return this.offSet;
}

  public buildPage(
    totalItems: number,
    currentPage: number,
    pageSize: number
  ): Paginator {
    this.currentPage = currentPage;
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number;
    let endPage: number;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        if (totalPages - (currentPage - 2) === 5) {
          startPage = currentPage - 1;
          endPage = currentPage + 3;
        } else {
          startPage = currentPage - 2;
          endPage = currentPage + 2;
        }
      }
    }

    // calculate property offset
    this.offSet = (currentPage - 1) * pageSize;
    const endIndex = Math.min(this.offSet + pageSize - 1, totalItems - 1);
    // build array pages
    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );

    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex: this.offSet,
      endIndex,
      pages,
    };
  }
}

import { AfterViewInit, Component, Inject } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IS_BROWSER } from '@app/config/tokens/app.tokens';

import { Header, HeaderType } from '@header/entities/header.interface';
import { HeaderStore } from '@header/header.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.container.html',
  styleUrls: ['./header.container.scss'],
})
export class HeaderContainer implements AfterViewInit {
  public headerAnimation: boolean = false;

  constructor(
    private router: Router,
    private headerStore: HeaderStore,
    @Inject(IS_BROWSER) public isBrowser: boolean
  ) {}

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.router.events
        .pipe(
          filter(
            (event) =>
              event instanceof ActivationEnd || event instanceof NavigationEnd
          )
        )
        .subscribe((router: ActivationEnd | NavigationEnd) => {
          if (router instanceof ActivationEnd) {
            if (router.snapshot.data.header_style) {
              this.headerStore.setHeaderStyle(
                router.snapshot.data.header_style
              );
            }
          }
        });
    }
  }

  get headerStyle$(): Observable<Header> {
    return this.headerStore.headerStyle$;
  }

  get headerTypeNone(): HeaderType {
    return HeaderType.NONE;
  }

  get headerTypeBanner(): HeaderType {
    return HeaderType.BANNER;
  }

  get headerTypeBasic(): HeaderType {
    return HeaderType.BASIC;
  }

  public headerType(header: Header): HeaderType {
    if (!!header.classType && header.classType === this.headerTypeNone)
      return HeaderType.NONE;
    else if (!!header.classType && header.classType === this.headerTypeBanner)
      return HeaderType.BANNER;
    else if (!!header.classType && header.classType === this.headerTypeBasic)
      return HeaderType.BASIC;
  }

}

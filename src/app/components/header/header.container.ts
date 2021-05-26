import { AfterViewInit, Component, Inject } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IS_BROWSER } from '@app/config/tokens/app.tokens';

import {
  Header,
  HeaderContentType,
  HeaderType,
} from '@header/entities/header.interface';
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

  public headerContentPortfolio(type: string): boolean {
    return type === HeaderContentType.PORTFOLIO;
  }

}

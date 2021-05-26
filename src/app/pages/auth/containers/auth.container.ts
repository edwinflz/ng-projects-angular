import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStore } from '@auth/auth.store';
import { User } from '@core/entities/user.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.container.html',
  styleUrls: ['./auth.container.scss'],
})
export class AuthContainer {
  public isLogin: boolean = true;

  constructor(private authFacade: AuthStore) {}

  get isLoading$(): Observable<boolean> {
    return this.authFacade.authLoading$;
  }

  public toggleLogin(): void {
    this.isLogin = !this.isLogin;
  }

  public register(user: User): void {
    this.authFacade.registerUser(user);
  }

  public login(user: User): void {
    this.authFacade.loginUser(user);
  }
}

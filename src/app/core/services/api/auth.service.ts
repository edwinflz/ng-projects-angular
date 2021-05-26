import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as urlTemplate from 'url-template';

import { authRoot } from '@core/constants/routes.constant';
import { LOCAL_STORAGE } from '@app/config/tokens/app.tokens';
import { LocalStorage } from '@core/entities/app.entities';
import { AUTH_TOKEN, AUTH_USER } from '@core/constants/auth.constant';
import { AuthServer, User } from '@core/entities/user.interface';
import { environment as ENV } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(LOCAL_STORAGE) private localStorage: LocalStorage,
  ) {}

  get authToken(): string {
    return AUTH_TOKEN;
  }

  get authUser(): string {
    return AUTH_USER;
  }

  get fetchToken(): string {
    return this.localStorage.getItem(this.authToken);
  }

  get fetchUserId(): number {
    const user = JSON.parse(this.localStorage.getItem(this.authUser)) as User;
    return user?.id;
  }

  public registerUser(user: User): Observable<AuthServer> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      x_aplication_id: ENV.apiKey,
    });
    return this.http.post<AuthServer>(
      ENV.urlApi.registerUser,
      {
        name: user.name,
        email: user.email,
        password: user.password,
        status: 1,
      },
      { headers }
    );
  }

  public loginUser(user: User): Observable<AuthServer> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      x_aplication_id: ENV.apiKey,
    });
    return this.http.post<AuthServer>(
      ENV.urlApi.loginUser,
      {
        email: user.email,
        password: user.password,
      },
      { headers }
    );
  }

  public getUser(key: string, userId: number): Observable<User> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: key,
    });
    const url = urlTemplate.parse(ENV.urlApi.fetchUser).expand({
      userId,
    });
    return this.http.get<User>(url, { headers });
  }

  public setTokenLocalStorage(token: string): void {
    this.localStorage.setItem(this.authToken, token);
  }

  public setUserLocalStorage(user: User): void {
    this.localStorage.setItem(this.authUser, JSON.stringify(user));
  }

  public logout(): void {
    this.localStorage.removeItem(this.authToken);
    this.localStorage.removeItem(this.authUser);
    this.redirectToLogin();
  }

  public redirectToLogin(): void {
    this.router.navigate([`${authRoot}`]);
  }
}

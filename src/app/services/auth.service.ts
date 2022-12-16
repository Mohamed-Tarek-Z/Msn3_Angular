import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseURL } from '../models/BaseUrl';
import { ProcessHTTPService } from './process-http-error.service';

interface AuthResponse {
  status: string;
  success: string;
  token: string;
}

interface JWTResponse {
  status: string;
  success: string;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenKey = 'JWT';
  isAuthenticated: Boolean = false;
  username: Subject<string> = new Subject<string>();
  authToken: string = '';

  constructor(private http: HttpClient,
    private processHTTPService: ProcessHTTPService) {
  }

  checkJWTtoken() {
    this.http.get<JWTResponse>(BaseURL + 'users/checkJWTtoken')
      .subscribe({
        next: (res) => {
          console.log('JWT Token Valid: ', res.success);
          this.sendUsername(res.user.username);
        },
        error: (err) => {
          console.log('JWT Token invalid: ', err);
          this.destroyUserCredentials();
        }
      });
  }

  sendUsername(name: string) {
    this.username.next(name);
  }

  clearUsername() {
    this.username.next("");
  }

  loadUserCredentials() {
    if (localStorage.getItem(this.tokenKey) != null) {
      const credentials = JSON.parse(localStorage.getItem(this.tokenKey) || "");
      if (credentials && credentials.username !== undefined) {
        this.useCredentials(credentials);
        if (this.authToken) {
          this.checkJWTtoken();
        }
      }
    } else {
      console.log('loadUserCredentials no JWT Found');
    }
  }

  storeUserCredentials(credentials: any) {
    localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
    this.useCredentials(credentials);
  }

  useCredentials(credentials: any) {
    this.isAuthenticated = true;
    this.sendUsername(credentials.username);
    this.authToken = credentials.token;
  }

  destroyUserCredentials() {
    this.authToken = '';
    this.clearUsername();
    this.isAuthenticated = false;
    localStorage.removeItem(this.tokenKey);
  }

  signUp(user: any) {
    return this.http.post<AuthResponse>(`${BaseURL}users/signup`,
      { 'username': user.username, 'password': user.password })
      .pipe(map(res => {
        this.storeUserCredentials({ username: user.username, token: res.token });
        return { 'success': true, 'username': user.username };
      }),
        catchError(error => this.processHTTPService.handleError(error)));
  }

  logIn(user: any): Observable<any> {
    return this.http.post<AuthResponse>(BaseURL + 'users/login',
      { 'username': user.username, 'password': user.password })
      .pipe(map(res => {
        this.storeUserCredentials({ username: user.username, token: res.token });
        return { 'success': true, 'username': user.username };
      }),
        catchError(error => this.processHTTPService.handleError(error)));
  }

  logOut() {
    this.http.get(`${BaseURL}users/logout`);
    this.destroyUserCredentials();
  }

  isLoggedIn(): Boolean {
    return this.isAuthenticated;
  }

  getUsername(): Observable<string> {
    return this.username.asObservable();
  }

  getToken(): string {
    return this.authToken;
  }

  changePW(username: string, oldpw: string, newpw: string) {
    if (this.isLoggedIn()) {
      return this.http.post(`${BaseURL}users/changepassword`, { 'username': username, 'oldpassword': oldpw, 'newpassword': newpw })
        .pipe(catchError(error => this.processHTTPService.handleError(error)));
    }
    return null!;
  }

  resetPW(username: string, newpw: string) {
    if (this.isLoggedIn()) {
      return this.http.post(`${BaseURL}users/resetpassword`, { 'username': username, 'newpassword': newpw })
        .pipe(catchError(error => this.processHTTPService.handleError(error)));
    }
    return null!;
  }
}

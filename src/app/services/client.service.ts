import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPService } from './process-http-error.service';
import { AuthService } from './auth.service';
import { BaseURL } from '../models/BaseUrl';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPService: ProcessHTTPService) { }

    getClients(): Observable<Client[]> {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.get<Client[]>(`${BaseURL}clients`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  addNewClient(Client: Client) {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.post<Client>(`${BaseURL}clients`, Client)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  getClientById(cliId: string) {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.get<Client>(`${BaseURL}clients/${cliId}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  editClientById(cliId: string, cli: Client) {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.post<Client>(`${BaseURL}clients/${cliId}`, cli)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  deletClientById(cliId: string) {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.delete(`${BaseURL}clients/${cliId}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }
}

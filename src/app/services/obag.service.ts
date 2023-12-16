import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPService } from './process-http-error.service';
import { AuthService } from './auth.service';
import { BaseURL } from '../models/BaseUrl';
import { Obag } from '../models/obag';

@Injectable({
  providedIn: 'root'
})
export class ObagService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPService: ProcessHTTPService) { }

  getOBags(proid: string): Observable<Obag[]> {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.get<Obag[]>(`${BaseURL}obags/?type=${proid}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  deletOBag(bagid: string): Observable<Obag> {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.delete<Obag>(`${BaseURL}obags/${bagid}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }
}

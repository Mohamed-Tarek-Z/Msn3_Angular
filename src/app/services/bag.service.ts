import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPService } from './process-http-error.service';
import { AuthService } from './auth.service';
import { BaseURL } from '../models/BaseUrl';
import { Bag } from '../models/bag';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPService: ProcessHTTPService) { }

  getBags(proid: string): Observable<Bag[]> {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.get<Bag[]>(`${BaseURL}bags/?type=${proid}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  addBag(bag: Bag) {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.post<Bag>(`${BaseURL}bags`, bag)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  editBags(ids: number[], lot: string, pallet: number, type: string) {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.put(`${BaseURL}bags`, { ids: ids, lot: lot, pallet: pallet, type: type })
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  deleteBags(ids: number[]) {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.delete(`${BaseURL}bags`, { body: ids })
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  getBag(bagid: string): Observable<Bag> {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.get<Bag>(`${BaseURL}bags/${bagid}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  editBag(bagid: string, bag: Bag): Observable<Bag> {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.post<Bag>(`${BaseURL}bags/${bagid}`, bag)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  deletBag(bagid: string): Observable<Bag> {
    if (!this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.delete<Bag>(`${BaseURL}bags/${bagid}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }
}

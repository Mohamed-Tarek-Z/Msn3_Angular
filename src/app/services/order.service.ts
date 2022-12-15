import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPService } from './process-http-error.service';
import { AuthService } from './auth.service';
import { BaseURL } from '../models/BaseUrl';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPService: ProcessHTTPService) { }

  getOrders(): Observable<Order[]> {
    if (this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.get<Order[]>(`${BaseURL}orders`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  createOrder(order: Order): Observable<Order> {
    if (this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.post<Order>(`${BaseURL}orders`, order)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  getOrder(ordId: string): Observable<Order> {
    if (this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.get<Order>(`${BaseURL}orders/${ordId}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }
  deletOrder(ordId: string) {
    if (this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.delete(`${BaseURL}orders/${ordId}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  retriveOrderById(ordId: string) {
    if (this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.get(`${BaseURL}orders/retrive/${ordId}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

}

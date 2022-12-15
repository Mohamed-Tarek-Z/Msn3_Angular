import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPService } from './process-http-error.service';
import { AuthService } from './auth.service';
import { BaseURL } from '../models/BaseUrl';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPService: ProcessHTTPService) { }

  getProducts(): Observable<Product[]> {
    if (this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.get<Product[]>(`${BaseURL}products`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  addProduct(product: Product) {
    if (this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.post<Product>(`${BaseURL}products`, product)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  getProduct(proid: string) {
    if (this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.get<Product>(`${BaseURL}products/${proid}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  editProduct(proid: string, pro: Product) {
    if (this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.post<Product>(`${BaseURL}products/${proid}`, pro)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }

  deletProduct(proid: string) {
    if (this.auth.isLoggedIn()) {
      return null!;
    }
    return this.http.delete(`${BaseURL}products/${proid}`)
      .pipe(catchError(error => this.processHTTPService.handleError(error)));
  }
}

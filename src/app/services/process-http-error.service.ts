import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPService {

  constructor() { }

  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    switch (error.status) {
      case 419:
        errMsg = 'Marking problem';
        break;
      case 420:
        errMsg = 'pallet is full';
        break;
      default:
        if (error.error instanceof ErrorEvent) {
          errMsg = error.error.message;
        } else {
          errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
        }
        break;
    }
    return throwError(() => new Error(errMsg));
  }
}

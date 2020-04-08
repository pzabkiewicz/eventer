import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirm(message?: string) {
    const confirmation = window.confirm(message || 'Is it OK?');

    return of(confirmation);
  }
}

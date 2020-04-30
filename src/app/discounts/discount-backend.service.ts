import { Injectable } from '@angular/core';
import { IDiscountService } from './discount.service';
import { Observable, of } from 'rxjs';
import { Discount } from '../model/discount';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const endpoint = "http://localhost:8090/discounts/"

@Injectable({ providedIn: 'root' })
export class DiscountBackendService implements IDiscountService {
    
    private discounts: Discount[] = [];

    constructor(private http: HttpClient) {}

    getDiscount(id: number): Observable<Discount> {
        const url = endpoint + id;
        return this.http.get<Discount>(url);
    }

    getDiscounts(): Observable<Discount[]> {
        return this.http.get<Discount[]>(endpoint)
            .pipe(
                tap(discounts => this.discounts = discounts)
            );
    }

    save(newDiscount: Discount): Observable<Discount> {
        return this.http.post<Discount>(endpoint, newDiscount)
            .pipe(
                tap((discount: Discount) => this.discounts.push(discount))
            );
    }

    update(discount: Discount): Observable<Discount> {
        return this.http.put<Discount>(endpoint, discount)
            .pipe(
                tap((discount: Discount) => {
                    const id = this.discounts.findIndex(d => d.id == discount.id);
                    this.discounts[id] = discount;
                })
            );  
    }

}
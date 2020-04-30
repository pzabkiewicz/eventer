import { Injectable } from '@angular/core';
import { Discount } from '../model/discount';
import { Observable, of } from 'rxjs';
import { DiscountMockService } from './discount-mock.service';

export interface IDiscountService {

    getDiscount(id: number): Observable<Discount>;

    getDiscounts(): Observable<Discount[]>;

    save(newDiscount: Discount): Observable<Discount>;

    update(discount: Discount): Observable<Discount>;

}

@Injectable({ providedIn: 'root' })
export class DiscountService implements IDiscountService {
    
    /** Replace with {@link DiscountBackendService} if you want to use backend server */
    constructor(private discountService: DiscountMockService) {}

    getDiscount(id: number): Observable<Discount> {
        return this.discountService.getDiscount(id);
    }
    
    getDiscounts(): Observable<Discount[]> {
        return this.discountService.getDiscounts();
    }

    save(newDiscount: Discount): Observable<Discount> {
        return this.discountService.save(newDiscount);
    }

    update(discount: Discount): Observable<Discount> {
        return this.discountService.update(discount);
    }

}
import { Injectable } from "@angular/core";
import { Discount } from '../model/discount';
import { Subject, Observable, of } from 'rxjs';
import { IDiscountService } from './discount.service';

@Injectable({providedIn: 'root'})
export class DiscountMockService implements IDiscountService {

    private seq: number = 0;

    private discounts: Discount[] = [
        new Discount("Students", 51, "%", "This is a discount for people who has valid student card.", this.seq++),
        new Discount("Veteran of war", 75, "%", "This is a discount for people who fighted against an enemy to protect their country.", this.seq++),
        new Discount("Women", 10, "abs", "Discount for beautiful girls.", this.seq++)
    ];

    getDiscount(id: number): Observable<Discount> {
        return of(this.discounts.find(d => d.id == id));
    }

    getDiscounts(): Observable<Discount[]> {
        return of(this.discounts);
    }

    save(discount: Discount): Observable<Discount> {
        discount.id = this.seq++;
        this.discounts.push(discount);

        return of(discount);
    }

    update(discount: Discount): Observable<Discount> {
        const index = this.discounts.findIndex(d => d.id == discount.id);
        this.discounts[index] = discount;

        return of(discount);
    }
}
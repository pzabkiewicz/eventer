import { Injectable } from "@angular/core";
import { Discount } from '../model/discount';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DiscountService {

    private seq: number = 0;

    discountsChanged: Subject<Discount[]> = new Subject<Discount[]>();

    private discounts: Discount[] = [
        new Discount("Students", 51, "%", "This is a discount for people who has valid student card.", this.seq++),
        new Discount("Veteran of war", 75, "%", "This is a discount for people who fighted against an enemy to protect their country.", this.seq++),
        new Discount("Women", 10, "abs", "Discount for beautiful girls.", this.seq++)
    ];

    getDiscount(id: number): Discount {
        return this.discounts.find(d => d.id == id);
    }

    getDiscounts() {
        return this.discounts.slice();
    }

    save(discount: Discount) {
        discount.id = this.seq++;
        this.discounts.push(discount);
        this.discountsChanged.next(this.discounts.slice());
    }

    update(discount: Discount) {
        const index = this.discounts.findIndex(d => d.id == discount.id);
        this.discounts[index] = discount;
        this.discountsChanged.next(this.discounts.slice());
    }
}
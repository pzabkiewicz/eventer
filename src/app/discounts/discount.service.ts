import { Injectable } from "@angular/core";
import { DiscountSaveModel } from '../model/discount-save-model';

@Injectable({providedIn: 'root'})
export class DiscountService {

    private discounts: DiscountSaveModel[] = [
        new DiscountSaveModel("Students", 51, "%", "This is a discount for people who has valid student card."),
        new DiscountSaveModel("Veteran of war", 75, "%", "This is a discount for people who fighted against an enemy to protect their country."),
        new DiscountSaveModel("Women", 10, "abs", "Discount for beautiful girls.")
    ];


    getDiscounts() {
        return this.discounts.slice();
    }

    save(discount: DiscountSaveModel) {
        this.discounts.push(discount);
    }
}
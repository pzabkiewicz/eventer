export class DiscountSaveModel {

constructor( 
    public summary: string,
    public amount: number,
    public amountUnit: string, // TODO: replace with ENUM
    public description
) {}

}
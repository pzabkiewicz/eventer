export class EventCreationDiscountSaveModel {
    
    constructor(
        id: string,
        value: boolean
    ) {}

}

export class EventSaveModel {
    
    constructor(
        public name: string,
        public location: string,
        public date: Date,
        public hour: Date,
        public price: string,
        public places: number, 
        public imgPath: string,
        public description: string,
        public discounts: EventCreationDiscountSaveModel[]
    ) {}

}
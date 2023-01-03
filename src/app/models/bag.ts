import { Product } from './product';
export class Bag {
    _id?: string;
    type: Product;
    lot: string;
    pallet: number;
    numberOfCones: number;
    wightOfEmptyBag: number;
    totalWight: number;
    netWight: number;
    marked: boolean;
    box: boolean;
    retrivedFromOrder?: boolean;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(pro: Product) {
        this.type = pro;
        this.lot = '';
        this.pallet = 1;
        this.numberOfCones = 1;
        this.wightOfEmptyBag = 1;
        this.totalWight = 1;
        this.netWight = 1;
        this.marked = false;
        this.box = false;
    }
}

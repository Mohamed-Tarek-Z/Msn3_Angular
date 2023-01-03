import { Product } from './product';
import { Bag } from './bag';
export class Order {
    _id?: string;
    clientName: string;
    type: Product;
    lot: string;
    bagsNumber: number;
    bags: Bag[];
    wight: number;
    pallets: number[];
    createdAt?: Date;
    updatedAt?: Date;

    constructor() {
        this.type = new Product();
        this.clientName = '';
        this.lot = '';
        this.bagsNumber = 0;
        this.wight = 0;
        this.pallets = [];
        this.bags = [];
    }
}

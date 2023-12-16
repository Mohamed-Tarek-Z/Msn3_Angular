import { Product } from './product';
import { Bag } from './bag';
import { Client } from './client';
export class Order {
    _id?: string;
    client: Client;
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
        this.client = new Client();
        this.lot = '';
        this.bagsNumber = 0;
        this.wight = 0;
        this.pallets = [];
        this.bags = [];
    }
}

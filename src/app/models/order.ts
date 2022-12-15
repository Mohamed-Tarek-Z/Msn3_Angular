import { Product }from './product';
import { Bag }from './bag';
export interface Order {
    _id:string;
    clientName: string;
    type: Product;
    lot: string;
    bagsNumber:number;
    bags: Bag[];
    wight: number;
    pallets: number[];
}

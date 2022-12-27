import { Product } from './product';
export interface Bag {
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
}

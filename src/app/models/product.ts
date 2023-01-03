export class Product {
    _id?: string;
    name: string;
    wightOfEmptyCone: number;
    colorOfEmptyCone: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor() {
        this.name = '';
        this.wightOfEmptyCone = 0.130;
        this.colorOfEmptyCone = '';
    }
}

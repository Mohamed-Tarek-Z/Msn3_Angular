export class Client {
    _id?: string;
    clientname: string;
    img: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor() {
        this.clientname = '';
        this.img = '';
    }
}

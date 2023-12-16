export interface User {
    _id?: string;
    username: string;
    img: string;
    admin: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

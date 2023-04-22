import { Document } from 'mongoose'

export interface Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly imageURl: string;
    readonly price: number;
    readonly createdAt: Date;
}
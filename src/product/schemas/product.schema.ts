import { Schema } from "mongoose";
 

export const productSchema = new Schema({
    name: String,
    description: String,
    imageURL: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
},{versionKey: false});
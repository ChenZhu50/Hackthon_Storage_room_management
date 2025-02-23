import { model, Schema, Types } from "mongoose";

enum ItemStatus {
    Unavailable = 0,
    Available = 1
}

interface IItem {
    title: string,
    description: string,
    quantity: number,
    imageUrl: string,
    club: Types.ObjectId,
    requests: Types.ObjectId[]
    
}

const itemSchema = new Schema<IItem>({
    title: { type: String, required: true },
    description: { type: String },
    quantity: { type: Number, required: true, default: 1 },
    imageUrl: { type: String },
    club: { type: Schema.Types.ObjectId, ref: "Club", required: true },
    requests: [{ type: Schema.Types.ObjectId, ref: 'ItemRequest' }]
});

const Item = model<IItem>('Item', itemSchema);
export default Item;

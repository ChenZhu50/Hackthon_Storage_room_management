import { model, Schema, Types } from "mongoose";
interface IItem {
    title: string,
    quantity: number
    club: Types.ObjectId;
}

const itemSchema = new Schema<IItem>({
    title: { type: String, required: true },
    quantity: {type: Number, required: true, default: 1 },
    club: {type: Schema.Types.ObjectId, ref: "Club", required: true }
});

const Item = model<IItem>('Item', itemSchema);
export default Item;
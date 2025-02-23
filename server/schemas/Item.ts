import { model, Schema, Types } from "mongoose";
enum ItemStatus {
    Unavailable = 0,
    Available = 1
}
interface IItem {
    title: string,
    quantity: number
    club: Types.ObjectId,
    status: ItemStatus,
    requests: Types.ObjectId[]
}

const itemSchema = new Schema<IItem>({
    title: { type: String, required: true },
    quantity: {type: Number, required: true, default: 1 },
    club: {type: Schema.Types.ObjectId, ref: "Club", required: true },
    status: {type: Number, enum: Object.values(ItemStatus), required: true, default: ItemStatus.Unavailable},
    requests: [{type: Schema.Types.ObjectId, ref: 'ItemRequest'}]
});

const Item = model<IItem>('Item', itemSchema);
export default Item;
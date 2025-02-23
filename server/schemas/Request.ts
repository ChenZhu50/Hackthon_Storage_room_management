import mongoose, { Schema, Types, model} from "mongoose";

interface IRequest {
    by: Types.ObjectId,
    quantity: Number,
    message: String
}
const requestSchema = new Schema<IRequest>({
    by: {type: mongoose.Schema.Types.ObjectId, ref: 'Club', required: true},
    quantity: {type: Number, required: true, default: 1},
    message: {type: String, required: true}
});
const ItemRequest = model<IRequest>('ItemRequest', requestSchema);
export default ItemRequest;
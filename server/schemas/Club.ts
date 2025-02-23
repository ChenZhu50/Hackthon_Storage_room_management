import mongoose, { Schema, Types, model} from "mongoose";

interface IClub {
    name: string,
    clubEmail: string,
    password: string,
    school: Types.ObjectId,
    items: Types.ObjectId[],
    likes: Types.ObjectId[]
}
const clubSchema = new Schema<IClub>({
    name: {type: String, required: true},
    clubEmail: {type: String, required: true},
    password: {type: String, required: true},
    school: {type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true},
    items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
});
const Club = model<IClub>('Club', clubSchema);
export default Club;
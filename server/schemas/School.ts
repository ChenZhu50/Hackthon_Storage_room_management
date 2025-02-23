import mongoose, { Schema, Types, model } from "mongoose";

interface ISchool {
    name: string,
    clubs: Types.ObjectId[]
}
const schoolSchema = new Schema<ISchool>({
    name: {type: String, required: true},
    clubs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Club' }]
});
const School = model<ISchool>('School', schoolSchema);
export default School;
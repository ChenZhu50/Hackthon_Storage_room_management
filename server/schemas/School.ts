import { Schema, Types } from "mongoose";

interface ISchool {
    name: string,
    admin: Types.ObjectId,
    clubs: Types.ObjectId[]
}
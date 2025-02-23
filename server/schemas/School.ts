import { Schema, Types } from "mongoose";

interface ISchool {
    name: string,
    clubs: Types.ObjectId[]
}
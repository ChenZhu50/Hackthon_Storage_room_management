import { Schema, Types } from "mongoose";

interface IClub {
    name: string,
    leaders: Types.ObjectId[],
    items: Types.ObjectId[]
}
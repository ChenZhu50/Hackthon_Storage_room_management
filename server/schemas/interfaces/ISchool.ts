import { PopulatedDoc, Types } from "mongoose";
import IUser from './IUser';

interface ISchool {
    _id: Types.ObjectId,
    name: string,
    admin: PopulatedDoc<IUser>,
    clubs: PopulatedDoc<IClub>[],
}
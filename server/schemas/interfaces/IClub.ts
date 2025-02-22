import { PopulatedDoc } from "mongoose";

interface IClub {
    name: string,
    leaders: PopulatedDoc<IUser>;
}
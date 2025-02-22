import { PopulatedDoc } from "mongoose";
interface IItem {
    title: string,
    quantity: number
    club: PopulatedDoc<>;
}
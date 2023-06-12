import { Card } from "./Card";
import { Data } from "./Data";

export type User = {
    email:string | undefined;
    password:string | undefined;
    name: string | undefined;
    surname: string | undefined;
    favorites: Card[] | undefined;
}

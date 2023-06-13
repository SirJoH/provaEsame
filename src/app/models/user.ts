import { Profile } from "./Profile";
import { Data } from "./Data";

export type User = {
    email:string | undefined;
    password:string | undefined;
    name: string | undefined;
    surname: string | undefined;
    favorites: Profile[] | undefined;
}

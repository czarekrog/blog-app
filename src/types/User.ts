import { UserAccessLevel } from "./UserAccessLevel";

export interface User {
  uid: string;
  name: string;
  accessLevel: UserAccessLevel;
}

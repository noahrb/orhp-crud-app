import { Address } from "./Address";
import { Policy } from "./Policy";
 
export interface User {
  id: string,
  name: string,
  email: string,
  phone: number,
  policies: Array<string>,
  addresses: Array<string>,
}
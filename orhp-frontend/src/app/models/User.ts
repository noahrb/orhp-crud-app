import { Address } from "./Address";
import { Policy } from "./Policy";
 
export interface User {
  id: number,
  name: string,
  email: string,
  phone: number,
  policies: Array<Policy>,
  addresses: Array<Address>,
}
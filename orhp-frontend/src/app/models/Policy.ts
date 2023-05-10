import { Address } from "./Address";

export interface Policy {
  id: number,
  monthly_premium: number,
  deductible: number,
  users: Array<string>,
  addresses: Array<string>
}
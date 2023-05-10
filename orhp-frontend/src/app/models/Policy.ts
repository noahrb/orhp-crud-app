import { Address } from "./Address";

export interface Policy {
  id: string,
  monthly_premium: string,
  deductible: string,
  users: Array<string>,
  addresses: Array<string>
}
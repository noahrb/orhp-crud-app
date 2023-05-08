import { Address } from "./Address";

export interface Policy {
  id: number,
  addresses: number,
  monthly_premium: number,
  deductible: number
}
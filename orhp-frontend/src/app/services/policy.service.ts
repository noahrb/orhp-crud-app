import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from '../models/Policy';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getPolicy(id: number) {
    return this.http.get<Policy>(this.baseUrl + '/policy/' + id);
  }

  getAllPolicy() {
    return this.http.get<Policy[]>(this.baseUrl + '/policy');
  }

  saveNewPolicy(
    id: string,
    premium: string,
    deductible: string,
    users: Array<String>
  ) {
    return this.http.post<Policy>(this.baseUrl + '/policy', {
      id: id,
      monthly_premium: premium,
      deductible: deductible,
      users: users,
      addresses: [],
    });
  }

  updatePolicy(
    id: string,
    premium: string,
    deductible: string,
    users: Array<String>
  ) {
    return this.http.post<Policy>(this.baseUrl + '/policy/update/' + id, {
      id: id,
      monthly_premium: premium,
      deductible: deductible,
      users: users,
      addresses: [],
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Policy } from '../models/Policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getPolicy(id: number) {
    return this.http.get<Policy[]>(this.baseUrl + "/policy?id=" + id);
  }

  getAllPolicy() {
    return this.http.get<Policy[]>(this.baseUrl + "/policy");
  }

  saveNewPolicy(id: string, premium: string, deductible: string, users: Array<String>) {
    return this.http.post<Policy>(this.baseUrl + "/policy", {
      id: id,
      monthly_premium: premium,
      deductible: deductible,
      users: users,
      addresses: []
    });
  }
}
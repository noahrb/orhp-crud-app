import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable()
export class UserService {
  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get<User[]>(this.baseUrl + "/api/users");
  }

  saveNewPerson(name: string, email: string, phone: string) {
    return this.http.post<User>(this.baseUrl + "/api/users", {
      name: name,
      email: email,
      phone: phone,
    });
  }
}
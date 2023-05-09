import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable()
export class UserService {
  baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get<User[]>(this.baseUrl + "/user");
  }

  saveNewPerson(name: string, email: string, phone: string) {
    return this.http.post<User>(this.baseUrl + "/user", {
      name: name,
      email: email,
      phone: phone,
    });
  }
}
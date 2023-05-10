import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable()
export class UserService {
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getUser(id: string) {
    return this.http.get<User>(this.baseUrl + '/user/' + id);
  }

  getAllUser() {
    return this.http.get<User[]>(this.baseUrl + '/user');
  }

  saveNewPerson(
    id: string,
    name: string,
    email: string,
    phone: string,
    policies: Array<String>
  ) {
    return this.http.post<User>(this.baseUrl + '/user', {
      id: id,
      name: name,
      email: email,
      phone: phone,
      policies: policies,
      addresses: [],
    });
  }

  deleteUser(id: string) {
    return this.http.post<User>(this.baseUrl + '/user/delete/' + id, {
      id: id
    });
  }
}

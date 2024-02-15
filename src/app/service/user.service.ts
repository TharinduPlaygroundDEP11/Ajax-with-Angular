import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDto} from "../dto/user-dto";

@Injectable()
export class UserService {

  readonly API_BASE_URL = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getAllUsers() : Observable<UserDto[]> {
    return this.http.get<UserDto[]>(this.API_BASE_URL);
  }
}

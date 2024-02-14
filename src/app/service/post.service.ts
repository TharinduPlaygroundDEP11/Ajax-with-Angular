import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostDto} from "../dto/post-dto";
import {Observable} from "rxjs";

@Injectable()
export class PostService {

  readonly API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getAllPosts() :Observable<PostDto[]> {
    return this.http.get<PostDto[]>(this.API_BASE_URL);
  }
}

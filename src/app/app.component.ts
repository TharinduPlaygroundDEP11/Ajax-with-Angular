import { Component } from '@angular/core';
import {PostService} from "./service/post.service";
import {PostDto} from "./dto/post-dto";

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <h1 class="text-center mb-4 text-info p-2">Ajax with Angular</h1>
    <table class="table table-bordered m-2">
      <thead>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>USER ID</th>
      </tr>
      </thead>
      <tbody>
        @for (post of postList; track $index) {
          <tr>
            <td>{{ post.id }}</td>
            <td class="text-bg-warning text-center">{{ post.title }}</td>
            <td>{{ post.userId }}</td>
          </tr>
          <tr>
            <td colspan="3" class="text-center text-primary-emphasis">{{ post.body }}</td>
          </tr>
        }
      </tbody>
    </table>
  `
})
export class AppComponent {
  title = 'ajax';

  postList: PostDto[] = [];

  constructor(private postService: PostService) {
    postService.getAllPosts().subscribe(response => this.postList = response);
  }
}

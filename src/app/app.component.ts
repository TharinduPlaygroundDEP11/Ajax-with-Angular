import {Component, inject} from '@angular/core';
import {PostService} from "./service/post.service";
import {PostDto} from "./dto/post-dto";
import {UserDto} from "./dto/user-dto";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <h1 class="text-center mb-4 text-info p-2">Ajax with Angular</h1>
    <!--<table class="table table-bordered m-2">
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
    </table>-->
    <table class="table table-bordered m-2">
      <thead>
      <tr class="text-center">
        <th>ID</th>
        <th>NAME</th>
        <th>E-MAIL</th>
        <th>WEBSITE</th>
      </tr>
      </thead>
      <tbody>
        @for (user of userList; track user.id) {
          <tr class="text-center">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.website }}</td>
          </tr>
        } @empty {
          <tr>
            <td colspan="4" class="text-center">No users to display!</td>
          </tr>
        }
      </tbody>
    </table>
  `
})
export class AppComponent {
  title = 'ajax';

  postList: PostDto[] = [];

  userList: Array<UserDto> = [];

  userService: UserService = inject(UserService);

  constructor(private postService: PostService) {
    // postService.getAllPosts().subscribe(posts => this.postList = posts);
    this.userService.getAllUsers().subscribe(users => this.userList = users);
  }
}

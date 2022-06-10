import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { PostsData } from 'src/app/interfaces/posts-data';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userPosts: PostsData[] = [];

  isPostAdded: boolean = false;

  isPostUpdated: boolean = false;

  isDeleted: boolean = false;

  isPatched: boolean = false;

  constructor(private posts: BaseHttpService, private auth: AuthService, private route: Router) {
    if (this.auth.isLoggedIn()) {
      this.route.navigate(['auth/user-details']);
    }
    else {
      this.route.navigate(['home']);
    }
  }

  // get req to api

  ngOnInit(): void {
    this.posts.get().subscribe((res) => {
      console.log(res);
      this.userPosts = res;
    })
  }

  // post req to api

  addPost(item: NgForm): void {
    let postBody = {
      title: item.value.title,
      path: item.value.path,
    }
    this.posts.post(postBody).subscribe((res) => {
      this.isPostAdded = true;
      console.log(res);
    });
  }

  // put req to api

  updatePost(item: NgForm) {
    let postBody = {
      id: item.value.id,
      title: item.value.title,
      path: item.value.path,
    }
    this.posts.put(postBody).subscribe((res) => {
      this.isPostUpdated = true;
      console.log(res);
    })
  }

  // delete req to API

  deletePost(item: NgForm) {
    let postBody = {
      id: item.value.id,
    }
    this.posts.delete('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts/' + postBody.id).subscribe((res) => {
      this.isDeleted = true;
      console.log(res);
    });
  }

  // patch req to API

  patchedPosts(item: NgForm) {
    let postBody = {
      id: item.value.id,
      title: item.value.title,
    }
    this.posts.patch(postBody).subscribe((res) => {
      this.isPatched = true;
      console.log(res);
    });
  }


}

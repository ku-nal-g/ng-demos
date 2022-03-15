import { Component } from '@angular/core';
import { BaseHttpService } from './services/base-http.service';
import { PostsData } from './interfaces/posts-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'health-care';

  userPosts:PostsData[]=[];

  isPostAdded:boolean = false;

  isPostUpdated:boolean = false;

  isDeleted:boolean = false;

  isPatched: boolean = false;

  constructor(private posts: BaseHttpService){}

  // get req to api

  ngOnInit(){
    this.posts.getPosts().subscribe((res =>{
      console.log(res);
      this.userPosts = res;
    }),
    (err) =>{
      alert("Unable to get data from API");
    });
  }

  // post req to api

  addPost(item:NgForm){
    let postBody = {
      title: item.value.title,
      path : item.value.path,
    }
    this.posts.addPosts(postBody).subscribe((res)=>{
      this.isPostAdded = true;
      console.log(res);
    },(err)=>{
      alert("Unable to add posts");
    });
  }

  // put req to api

  updatePost(item:NgForm){
    let postBody = {
      id: item.value.id,
      title: item.value.title,
      path: item.value.path,
    }
    this.posts.updatePosts(postBody).subscribe((res) =>{
      this.isPostUpdated = true;
      console.log(res);
    },(err)=>{
      alert("Unable to update posts");
    })
  }

  // delete req to API

  deletePost(item:NgForm){
    let postBody = {
      id: item.value.id,
    }
    this.posts.updatePosts(postBody).subscribe((res) =>{
      this.isDeleted = true;
      console.log(res);
    },(err)=>{
      alert("Unable to delete posts");
    })
  }

  // patch req to API

  patchedPosts(item:NgForm){
    let postBody = {
      id: item.value.id,
      title: item.value.title,
    }
    this.posts.patchPosts(postBody).subscribe((res) =>{
      this.isPatched = true;
      console.log(res);
    },(err)=>{
      alert("Unable to Patch posts");
    })

  }

  
}

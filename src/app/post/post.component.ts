import { Component, OnInit } from '@angular/core';
import { HttpClientService, Post } from '../service/http-client.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:Post[];

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit()  {
    this.httpClientService.getPosts().subscribe(
      response=>{this.posts= response;}
    );
  }
  deletePost(post: Post): void {
    this.httpClientService.deletePost(post)
      .subscribe( data => {
        alert("Post is removed.");
        this.posts = this.posts.filter(u => u !== post);
      })
  };


 
  

}

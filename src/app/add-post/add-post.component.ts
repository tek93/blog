import { Component, OnInit } from '@angular/core';
import { HttpClientService, Post } from '../service/http-client.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  news: Post = new Post("","","","");


  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }
  createPost(): void {
    this.httpClientService.createPost(this.news)
        .subscribe( data => {
          alert("Post created successfully.");
        });

  };


}

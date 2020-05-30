import { Component, OnInit } from '@angular/core';
import { Post, HttpClientService } from '../service/http-client.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:Post[];
  constructor(private httpClientService:HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getPosts().subscribe(
      response=>{this.posts= response;}
    );
  }

}

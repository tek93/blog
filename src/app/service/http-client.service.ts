import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Post{
  constructor(
    public postId:string,
    public name:string,
    public description:string,
    public author:string,

  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    public httpClient:HttpClient
  ) { }
  getPosts()
  {
  
   
    return this.httpClient.get<Post[]>('https://heroku-blog2.herokuapp.com/posts');
  }
  
  public deletePost(post) {
    

   
    return this.httpClient.delete<Post>("https://heroku-blog2.herokuapp.com/post" + "/"+ post.postId);
  }

  public createPost(post) {
 
    return this.httpClient.post<Post>("https://heroku-blog2.herokuapp.com/post", post);
  }

}

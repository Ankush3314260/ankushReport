import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from './models/post-model';

@Injectable({
  providedIn: 'root'
})
export class GridServiceService {

  // base URL for get the data (as Provided)
   private baseUrl :string ='https://jsonplaceholder.typicode.com/posts'


  constructor(private http:HttpClient) { }
// to get the data
  public getGridData():Observable<Post[]>{
        return this.http.get<Post[]>(this.baseUrl)
  }
  // to post the data
  public postTheData(post:Post):Observable<Post>{
       return this.http.post<Post>(this.baseUrl,post)
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http:HttpClient
  ) { }
  
  getMovies(){
    return this.http.get(`${environment.url}/api/movies`)
  }
  addMovies(obj:any){
    return this.http.post(`${environment.url}/api/movies/add`, {"body": obj})
  }
}

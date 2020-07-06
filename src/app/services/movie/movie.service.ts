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
    // return this.http.get(`${environment.url}/api/movies`)
    return new Promise(
      (resolve, reject) => {
        this.http.get(`${environment.url}/api/movies`
        )
        .subscribe((res:any) => {
          console.log(res);
          resolve(res)
        }, (err) => {
          reject(err);
      });
    });
  }
  addMovies(obj:any){
    // return this.http.post(`${environment.url}/api/add-movies`, 
    //   {
    //     "body": {
    //       "request":obj
    //     }
    //   }
    // )
    return new Promise(
      (resolve, reject) => {
        this.http.post(`${environment.url}/api/add-movies`,
          {
            "body": {
              "request":obj,
            }
          }
        )
        .subscribe((res:any) => {
          console.log(res);
          resolve(res)
        }, (err) => {
          reject(err);
      });
    });
    
  }

  editMovies(obj){
    return new Promise(
      (resolve, reject) => {
        this.http.post(`${environment.url}/api/movies/${obj.id}`,
          {
            "body": {
              "request":obj,
              "action":"edit"
            }
          }
        )
        .subscribe((res:any) => {
          console.log(res);
          resolve(res)
        }, (err) => {
          reject(err);
      });
    });
  }

  deleteMovies(id:string){
    return new Promise(
      (resolve, reject) => {
        this.http.post(`${environment.url}/api/movies/${id}`,
          {
            "body": {
              "action":"delete"
            }
          }
        )
        .subscribe((res:any) => {
          console.log(res);
          resolve(res)
        }, (err) => {
          reject(err);
      });
    });
  }
}

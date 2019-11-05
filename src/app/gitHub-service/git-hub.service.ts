import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  user: any;
  clientId:string='94e208cabed5e1993b64'
clientSecret:string='e2b8b6ae1337a9dc76e931d51249486b1c269783'
  username: string = "54adana"
  baseURL: string = 'https://api.github.com';
  
  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username= '54adana';
  }

  // getRepos(userName: string): Observable<repos[]> {
  //      return this.http.get<repos[]>(this.baseURL + '/users/' + userName + '/repos');
  // }

  getUser () {
    return this.http.get(this.baseURL + 'users/'+ this.username +'/client_id='+this.clientId +'&client_secret='+this.clientSecret)
    // .map(res => res.json())
  }
};

  

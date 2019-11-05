import { Component, OnInit, } from '@angular/core';
import { ProfileService }from '../profile-service/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;
constructor(private profileService:ProfileService){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });
  this.profileService.getProfileRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  });
}
findProfile(){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });
  this.profileService.getProfileRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  })
}
  ngOnInit() {
  }
}
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username:string;
private clientid = "d4db20ae57a9e8f462da";
private clientsecret = "b3579b59810e8febbc0248bfa93303730e88b822";
  constructor(private http:HttpClient) {
    console.log("Service is now ready!");
    this.username = "wasongapaul5";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}


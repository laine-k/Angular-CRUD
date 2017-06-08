import { Component } from '@angular/core';
import { GithubService }  from './githup.service';
import {OnInit} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'github-profile',
  styles:[`
    .avatar{
      width:20%;
      height:20%;
      border-radius:100%;
    }
  `],
  template: `
  <div *ngIf="isLoading">Getting data...</div>
  <h1>{{user.login}}</h1>
  <img class="avatar" src="{{user.avatar_url}}">
  <h2>Followers:</h2>
  <div *ngFor="let follower of followers" class="media">
    <div class="media-left">
      <img class="media-object avatar" src="{{follower.avatar_url}}">
    </div>
  </div>
    `,
})
export class GithubProfileComponent implements OnInit  {
  
     name = 'Angular'; 
   isLoading = true; //property
   username="/octocat";
   user = {};
   followers: any[];

   constructor(private _gitHubService:GithubService){   
   }
   ngOnInit(){ //called when angular instantiates component, called after the constructor
    Observable.forkJoin(
      this._gitHubService.getUser(this.username),
      this._gitHubService.getFollowers(this.username)
    )
    .subscribe(
      res =>{
        this.user =res[0];
        this.followers=res[1];
      },
      null,
      ()=>{ this.isLoading = false;}
    )
   }
}

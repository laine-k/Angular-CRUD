import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable() //to make the class available for DI
export class GithubService{
    private _baseUrl="https://api.github.com/users";
    constructor(private _http:Http){

    }
    getUser(username:any){
        return this._http.get(this._baseUrl + username)
        .map(res=>res.json());
    }
    getFollowers(username:any){
        return this._http.get(this._baseUrl + username + "/followers")
        .map(res=>res.json());
    }
}
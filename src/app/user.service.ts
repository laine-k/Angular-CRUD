import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable() //to make the class available for DI
export class UserService{
    private _url="https://jsonplaceholder.typicode.com/users";
    constructor(private _http:Http){

    }
    getUsers(){
		return this._http.get(this._url)
			.map(res => res.json());
	 }  
   addUser(user:any){
     console.log(user);
     return this._http.post(this._url, JSON.stringify(user))
     .map(response =>response.json());
   } 
}
import { Component, OnInit } from '@angular/core';
import { UserService }  from './user.service';


@Component({
  selector: 'users', 
  template: ` 
  <h1>Users</h1>  
  <a class="btn btn-primary" routerLink="/users/new">Add new user</a>
  <table class="table table-bordered">
    <thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
    </thead>
    <tbody>
            <tr *ngFor="let user of users; let i = index">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td><button class="btn btn-sm btn-primary">Edit</button>  
            <td><button class="btn btn-sm btn-primary">Delete</button>  
            </tr>  
    </tbody>
  </table>
    `,
})
export class UserComponent implements OnInit {
    users:any[];
    constructor(private _userService:UserService){

    }
    ngOnInit(){
        this._userService.getUsers()
		.subscribe(users => this.users = users);
    }

}
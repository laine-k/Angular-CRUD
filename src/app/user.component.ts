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
            <td><button routerLink={{user.id}} class="btn btn-sm btn-primary">Edit</button>  
            <td><button (click)=deleteUser(user) class="btn btn-sm btn-primary">Delete</button>  
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
    deleteUser(user:any){
        var index = this.users.indexOf(user)
        this.users.splice(index,1);
        this._userService.deleteUser(user.id)
            .subscribe(null,
                err => {
                    alert("Can not delete user");
                }
            )
        /*this._userService.deleteUser(this.user)
		.subscribe(users => this.users = users);*/
    }

}

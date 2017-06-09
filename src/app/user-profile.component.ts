import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {User} from './user';
import { UserFormComponent }  from './user-form.component';
import { UserPostComponent }  from './user-post.component';
import { UserService }  from './user.service';

@Component({
  selector: 'user-profile', 
  template: `
<h3>{{user.name}} profile</h3>
<button [routerLink]="['posts']" class="btn btn-primary">User posts</button>
<button [routerLink]="['albums']" class="btn btn-primary">User albums</button>
<button [routerLink]="['edit-profile']" class="btn btn-warning">Edit profile</button>
<router-outlet></router-outlet> 
`
})
export class UserProfileComponent implements OnInit{
    user = new User();
constructor(		
		private _userService: UserService,
		private _router: Router,
		private _activatedRoute:ActivatedRoute
	) {}

ngOnInit(){
		var id= this._activatedRoute.snapshot.params['id'];
		if(!id)
			return;
		this._activatedRoute.params
        .switchMap((params: Params) => this._userService.getUser(+id))
        .subscribe(user => this.user = user);
	
	}
}
//name: ['', Validators.required],
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import {ValidatorsCustom} from './validators-custom';
import { UserService }  from './user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from './user';
import { UserPostComponent }  from './user-post.component';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user-form', 
  templateUrl: 'app/user-form.component.html'
})
export class UserFormComponent implements OnInit {

    form: FormGroup;
	title:string;
	//user={address:{}}; //blank user object prevents us from getting null reference exceptions
	user = new User();
	//userId = this.user.id;
	submitBtnText:string;


	constructor(
		fb: FormBuilder,
		private _userService: UserService,
		private _router: Router,
		private _activatedRoute:ActivatedRoute
	) {
		
		this.form = fb.group({
			name:['', Validators.required],
			email: ['', ValidatorsCustom.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
	}
	saveForm(){
		var result;
		if(this.user.id)
			result = this._userService.updateUser(this.user);
		else
			result = this._userService.addUser(this.form.value) 
		/**value property returns a JSON object that looks exactly
		 *  as the user object on JSON placeholder
		 * thats why there is no subgroup called user.
		 * AddUsert method returns an observable to which we have subscribed.
		 * The anonymous method (x) is called when we get the results from server,
		 * at that point it's good  practice to clean the form (form.markAsPristine)-
		 *  and then navigate to list of users.
		 * */
		result.subscribe(x => {
			this._router.navigate(['users']);
		})
	}
	ngOnInit(){
		var id= this._activatedRoute.snapshot.parent.params['id'];
		this.title = id ? "Edit user" : "Add new user";
		this.submitBtnText = id ? "Update user details" : "Add new user";
		console.log("user id:" + id);
		if(!id)
			return;
		this._activatedRoute.params
        .switchMap((params: Params) => this._userService.getUser(+id))
        .subscribe(user => this.user = user);

		/*var id = this._routeParams.params["id"];
		this.title = id ? "Edit user" : "Add new user";
		console.log(id);
		if(id){
			this._userService.getUser(id)
		}
		if(!id)
			return;
		
		this._userService.getUser(id)
		.subscribe(
			user => this.user = user, //set the user object in this component to the object that we get from the server
			response => {
				if(response.status ==404){
					//navigate to not found
					console.log("Not Found");
				}
			}
		);*/
	}
}
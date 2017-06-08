import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import {ValidatorsCustom} from './validators-custom';
import { UserService }  from './user.service';
import {Router} from '@angular/router';



@Component({
  selector: 'user-form', 
  templateUrl: 'app/user-form.component.html'
})
export class UserFormComponent {

    form: FormGroup;

	constructor(
		fb: FormBuilder,
		private _userService: UserService,
		private _router: Router
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
		this._userService.addUser(this.form.value) 
		/**value property returns a JSON object that looks exactly
		 *  as the user object on JSON placeholder
		 * thats why there is no subgroup called user.
		 * AddUsert method returns an observable to which we have subscribed.
		 * The anonymous method (x) is called when we get the results from server,
		 * at that point it's good  practice to clean the form (form.markAsPristine)-
		 *  and then navigate to list of users.
		 * */
		.subscribe(x => {
			this._router.navigate(['users']);
		})
	}
}

//name: ['', Validators.required],
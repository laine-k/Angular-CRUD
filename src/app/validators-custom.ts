import {FormControl } from '@angular/forms';
export class ValidatorsCustom{
	static email(control:FormControl){

        //email regular expression
		var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var invalid = regEx.test(control.value);  
        //return valid ? null : { validEmail: true };        
        if(!invalid)
            return{ validEmail:true};
            return null;        
	}
}
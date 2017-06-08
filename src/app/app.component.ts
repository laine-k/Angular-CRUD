import { Component } from '@angular/core';
import { NavComponent }  from './navbar.component';


@Component({
  selector: 'my-app',
  styles:[`
    .avatar{
      width:20%;
      height:20%;
      border-radius:100%;
    }
  `],
  template: ` 
  <navbar></navbar>
  <div class="container">
    <router-outlet></router-outlet>
  </div> 
    `,
})
export class AppComponent {

}

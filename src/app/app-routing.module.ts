import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './home.component';
import { UserComponent }  from './user.component';
import { PostComponent }  from './post.component';
import { UserFormComponent }  from './user-form.component';
import { UserPostComponent }  from './user-post.component';

const routes: Routes = [
      {
        path: 'posts',
        component: PostComponent        
      },
      {
        path: 'users',
        component: UserComponent        
      },
      {
        path: 'users/new',
        component: UserFormComponent        
      },
      {
        path: 'users/:id',
        component: UserFormComponent,
        children:[
          {
            path:'posts',
            component:UserPostComponent
          }          
        ]       
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'home', //to start the app by showing user list
        pathMatch: 'full'
      }     
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

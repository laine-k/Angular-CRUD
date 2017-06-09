import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './home.component';
import { UserComponent }  from './user.component';
import { PostComponent }  from './post.component';
import { UserProfileComponent }  from './user-profile.component';
import { UserFormComponent }  from './user-form.component';
import { UserPostComponent }  from './user-post.component';
import {AlbumsComponent} from './albums.component';

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
        component: UserProfileComponent,
        children:[
          {
            path:'posts',
            component:UserPostComponent
          },
          {
            path:'edit-profile',
            component:UserFormComponent
          },
          {
            path:'albums',
            component:AlbumsComponent
          }         
        ]       
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'users', //to start the app by showing user list
        pathMatch: 'full'
      },
      {
        path: '**', //wildcard
        redirectTo: 'users'
      }    
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

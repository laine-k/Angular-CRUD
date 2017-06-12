import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**navigation between views */
import { AppRoutingModule }     from './app-routing.module';
/**components */
import { AppComponent }  from './app.component';
import { GithubProfileComponent }  from './github-profile.component';

import { NavComponent }  from './navbar.component';
import { HomeComponent }  from './home.component';
import { UserComponent }  from './user.component';
import { UserProfileComponent }  from './user-profile.component';
import { UserFormComponent }  from './user-form.component';
import { UserPostComponent }  from './user-post.component';
import { PaginationComponent }  from './pagination.component';

import { PostComponent }  from './post.component';
import {AlbumsComponent} from './albums.component';

/**Services */
import { PostService }  from './post.service';
import { AlbumsService }  from './albums.service';
import { UserService }  from './user.service';
import { GithubService }  from './githup.service';

@NgModule({
  imports:      [ BrowserModule,HttpModule, JsonpModule, AppRoutingModule,FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent,GithubProfileComponent,NavComponent, HomeComponent, UserComponent, PostComponent, AlbumsComponent , UserProfileComponent,UserFormComponent, UserPostComponent,PaginationComponent],
  bootstrap:    [ AppComponent ],
  providers:    [PostService, AlbumsService, UserService, GithubService]
})
export class AppModule { }

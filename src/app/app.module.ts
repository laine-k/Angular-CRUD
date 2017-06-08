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
import { UserFormComponent }  from './user-form.component';

import { PostComponent }  from './post.component';

/**Services */
import { PostService }  from './post.service';
import { UserService }  from './user.service';
import { GithubService }  from './githup.service';

@NgModule({
  imports:      [ BrowserModule,HttpModule, JsonpModule, AppRoutingModule,FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent,GithubProfileComponent,NavComponent, HomeComponent, UserComponent, PostComponent,UserFormComponent],
  bootstrap:    [ AppComponent ],
  providers:    [PostService,UserService, GithubService]
})
export class AppModule { }

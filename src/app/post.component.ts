import {Component, OnInit}  from '@angular/core';
import { PostService }  from './post.service';
import {UserService} from './user.service';
import {Post} from './post';

@Component({ //decorator
    selector: 'posts',   
    template: `      
       <div>
            <h3>All posts</h3>
        <select class="form-control" (change)="reloadPosts({userId: selectedUser.id})" [(ngModel)]="selectedUser">
            <option value =" ">Select user</option>
            <option *ngFor="let user of users" [ngValue]="user">{{user.name}}</option>
        </select>
        <table border="1">
        <thead>
            <tr>
            <th>User ID</th>           
            <th>Title</th>  
            <th>Post</th>            
            </tr>
        </thead>
       <tbody>
            <tr *ngFor="let post of posts; let i = index">
            <td>{{post.userId}}</td>    
            <td>{{post.title}}</td>   
            <td>{{post.body}}</td>          
        </tbody>
        </table>
        </div>
    ` 
})

export class PostComponent implements OnInit  { //constructor
    selectedUser:Object ={}
    posts:Post[]; //posts property that returns an array of posts that it acquires from a service
    users:any;
    currentPost:any;
    errorMessage:any;
    constructor(
            private _postService:PostService,
            private _userService:UserService
        ) {}  

    ngOnInit(){
        this.getPosts();
        this.getUsers();        
    } 

     private getPosts(filter?:any) {
        this._postService.getPosts(filter)
            .subscribe( 
                posts => this.posts = posts,
                error => this.errorMessage = <any>error);
     }
     reloadPosts(filter:any){
         console.log(filter);
        this.currentPost = null;
        this.getPosts(filter);
     }
     private getUsers(){
        this._userService.getUsers()
            .subscribe( 
                users => this.users = users)
     }
}
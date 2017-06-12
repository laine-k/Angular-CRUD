import {Component, OnInit}  from '@angular/core';
import { PostService }  from './post.service';
import {UserService} from './user.service';
import {Post} from './post';
import { PaginationComponent }  from './pagination.component';

@Component({ //decorator
    selector: 'posts',   
    template: `      
       <div>
            <h3>All posts</h3>
        <select class="form-control" (change)="reloadPosts({userId: selectedUser.id})" [(ngModel)]="selectedUser">
            <option value =" ">Select user</option>
            <option *ngFor="let user of users" [ngValue]="user">{{user.name}}</option>
        </select>
        <pagination [items]="posts" (page-changed)="onPageChanged($event)"></pagination>
        <table border="1">
        <thead>
            <tr>
            <th>User ID</th>           
            <th>Title</th>  
            <th>Post</th>            
            </tr>
        </thead>
       <tbody>
            <tr *ngFor="let post of pagedPosts; let i = index">
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
    //posts:Post[]; //posts property that returns an array of posts that it acquires from a service
    posts = [];
    pagedPosts = [];
    users = [];
    currentPost;
    errorMessage;
    pageSize=10;
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
                //posts => this.posts = posts,
                posts=>{
                    this.posts = posts;
                    this.pagedPosts = this.getPostsInPage(1);
                },
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
     onPageChanged(page:any){
        this.pagedPosts = this.getPostsInPage(page);
     }
     private getPostsInPage(page:any){
         var result = [];
         var startingIndex = (page-1) * this.pageSize;
         var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);
         for(var i = startingIndex; i < endIndex; i++)
            result.push(this.posts[i])
        return result;
     }
}
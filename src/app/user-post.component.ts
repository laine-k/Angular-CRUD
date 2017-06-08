import {Component, OnInit}  from '@angular/core';
import { PostService }  from './post.service';
import {Post} from './post';

@Component({ //decorator
    selector: 'user-posts',
    /*templateUrl:'./user-detail.component.html'*/
    template: `      
       <div>
            <h3>Show posts of the particular user</h3>
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

export class UserPostComponent implements OnInit  { //constructor
    posts:Post[]; //posts property that returns an array of posts that it acquires from a service
    errorMessage:any;
    constructor(
            private _postService:PostService
        ) {}  

    ngOnInit(){
        this.getPosts();
    } 

     getPosts() {
        this._postService.getPosts()
            .subscribe( 
                posts => this.posts = posts,
                error => this.errorMessage = <any>error);
     }
}
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Post} from './post';

@Injectable() //to make the class available for DI
export class PostService{
    private _url="https://jsonplaceholder.typicode.com/posts";
    constructor(private _http:Http){

    }
    getPosts(filter?) : Observable <Post[]>{
        var url = this._url;
        if(filter && filter.userId)
        url += "?userId=" + filter.userId;
        return this._http.get(url)
        .map(res=>res.json());
    }
    createPost(post:Post){
        return this._http.post(this._url, JSON.stringify) //scond is is a string that represent request body.Serialize post object as a string.
        .map(res=>res.json());
    }
}
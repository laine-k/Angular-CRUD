import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Post} from './post';

@Injectable() //to make the class available for DI
export class AlbumsService{
    private _url="https://jsonplaceholder.typicode.com/albums";
    constructor(private _http:Http){

    }
    getAlbums(filter?:any) : Observable <Post[]>{
        //console.log("User id for filter: "+filter);
        var url = this._url;
        if(filter && filter.userId)
        url += "?userId=" + filter.userId;
        //console.log("URL: "+filter.userId);
        return this._http.get(url)
        .map(res=>res.json());
    }    
}
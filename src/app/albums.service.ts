import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Album} from './album';

@Injectable() //to make the class available for DI
export class AlbumsService{
    private _url="https://jsonplaceholder.typicode.com/albums";
    constructor(private _http:Http){

    }
    getAlbums(filter?:any) : Observable <Album[]>{
        //console.log("User id for filter: "+filter);
        var url = this._url;
        if(filter && filter.userId)
        url += "?userId=" + filter.userId;
        //console.log("URL: "+filter.userId);
        return this._http.get(url)
        .map(res=>res.json());
    } 
    getPhotos(albumId:number){
        var url = this._url;
        url += "/" + albumId + "/photos";
        return this._http.get(url)
        .map(res =>res.json());
    }   
}
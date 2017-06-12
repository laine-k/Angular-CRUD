import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { AlbumsService }  from './albums.service';
import {Album} from './album';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'albums', 
  template: `
    <div class="col-md-6">
    <h3>Select the album to see the photos</h3>
    <table border="1">
        <thead>
            <tr>
            <th>User id</th>
            <th>ID</th>           
            <th>Title</th>                      
            </tr>
        </thead>
       <tbody>
            <tr *ngFor="let album of albums; let i = index" (click)="selectAlbum(album)">
            <td>{{album.userId}}</td>    
            <td>{{album.id}}</td>   
            <td>{{album.title}}</td>          
        </tbody>
        </table>
    </div>
    <div class="col-md-6" *ngIf="currentAlbum">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Album id: {{ currentAlbum.id }}</h3>
            </div>
            <div class="panel-body">
                <p>{{ currentAlbum.title }}</p>
            </div>
        </div>
        <div class="media" *ngFor="let photo of currentAlbum.photos">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src="{{photo.thumbnailUrl}}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">Photo id: {{photo.id}}</h4>
                {{photo.title}}
            </div>
        </div>
    </div>
       
`
})
export class AlbumsComponent implements OnInit{
    //album = new Album();
albums:Album[];
currentAlbum:any;
errorMessage:any;
constructor(		
		private _router: Router,
		private _activatedRoute:ActivatedRoute,
        private _albumsService: AlbumsService
	) {}

ngOnInit(){
		var id= this._activatedRoute.snapshot.parent.params['id'];
        console.log(id);
		if(!id)
			return;
            this.getAlbums({userId:id})
	}
    private getAlbums(filter?:any){
        this._albumsService.getAlbums(filter)
            .subscribe(
                albums => this.albums = albums,
                error => this.errorMessage = <any>error);            
    }
    selectAlbum(album:any){
        this.currentAlbum=album;
        this._albumsService.getPhotos(album.id)
            .subscribe(
                photos => this.currentAlbum.photos = photos
            )
    }
}
//name: ['', Validators.required],
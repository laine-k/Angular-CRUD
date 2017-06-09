import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { AlbumsService }  from './albums.service';

import {Album} from './album';


@Component({
  selector: 'albums', 
  template: `
<h3>Albums by title</h3>
<table border="1">
        <thead>
            <tr>
            <th>User id</th>
            <th>ID</th>           
            <th>Title</th>  
                        
            </tr>
        </thead>
       <tbody>
            <tr *ngFor="let album of albums; let i = index">
            <td>{{album.userId}}</td>    
            <td>{{album.id}}</td>   
            <td>{{album.title}}</td>          
        </tbody>
        </table>
       
`
})
export class AlbumsComponent implements OnInit{
    //album = new Album();
albums:Album[];
constructor(		
		private _router: Router,
		private _activatedRoute:ActivatedRoute,
        private _albumsService: AlbumsService
	) {}

ngOnInit(){
		var id= this._activatedRoute.snapshot.params['id'];
		if(!id)
			return;
		this._activatedRoute.params
        .switchMap((params: Params) => this._albumsService.getAlbums())
        .subscribe(albums => this.albums = albums);	
	}
}
//name: ['', Validators.required],
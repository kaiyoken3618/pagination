import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
//import { ,Service } from './basic.service';  

import {PaginationInstance} from 'ngx-pagination';
//import { AuthService } from './auth.service'; 
import {Observable, of} from 'rxjs'; 
import { delay, map, tap } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 

 

@Component({
  selector: 'server-root',
  templateUrl: './server.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerComponent implements OnInit { 
     
  constructor( private http: HttpClient) {} 
  ngOnInit(): void {
    //throw new Error('Method not implemented.'); 
    this.gty(1); 
    console.log(this.totalItems);
  }

  page = 1;
  user: any; 
  itemsPerPage = 6;
  totalItems : any; 

  gty(page: any){
    this.http.get(`https://jsonplaceholder.typicode.com/todos?page=${page}&size=${this.itemsPerPage}`).subscribe((data: any) => {
      this.user =  data; 
      //console.log(this.user);
      this.totalItems = data.length;
    })
  }

}  
  



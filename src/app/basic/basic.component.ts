import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
//import { ,Service } from './basic.service';  

import {PaginationInstance} from 'ngx-pagination';
import { AuthService } from './auth.service'; 
import {Observable, of} from 'rxjs'; 
import { delay, map, tap } from 'rxjs/operators';
 
interface IServerResponse {
  items: string[];
  total: number;
}
@Component({
  selector: 'basic-root',
  templateUrl: './basic.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent implements OnInit { 
    
  constructor(private auth: AuthService){}
  
  ngOnInit(){
    this.getData()
  }

  p:number=1;
  data:any=[]; 
  //passenger: any; 
  itemsPerPage = 6;
  totalItems : any;  

  getData() {
    this.auth.getData().subscribe(
      (data) => {
        this.data = data;
        console.log(this.data); 
        this.p =  0;
      }
    );
  } 
   

}  
  



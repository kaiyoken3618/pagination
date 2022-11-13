
//import { ,Service } from './basic.service';  

import {PaginationInstance} from 'ngx-pagination';
import { AuthService } from './auth.service'; 

import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 

 

import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {Observable, of} from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

interface IServerResponse {
    items: any;
    total: number;
}

@Component({
    selector: 'async-server',
    templateUrl: './async-server-side.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncServerSideComponent {
     
    constructor(private auth: AuthService){} 

    meals: any = [];
    //asyncMeals: any; 
    asyncMeals: Observable<any> = new  Observable<any>  ;
    p: number = 1;
    total: number = 0;
    loading: boolean = true;

    ngOnInit() {
         
        this.getData(); 
        this.getPage(1);          
        
    }  

    getData() {
        this.auth.getData().subscribe(
          (data) => {
            this.meals = data;
            console.log(this.meals); 
            this.p =  0;
          }
        ); 
      } 

    getPage(page: number) { 
          
        //this.getData();
        this.loading = true;
        this.asyncMeals = serverCall(this.meals, page).pipe(
            tap(res => {
                this.total = res.total;
                this.p = page;
                this.loading = false; 
                console.log(this.total);
            }),
            map(res => {
                console.log(res.items); 
                return res.items;
            }),  

        );
    }
}

/**
 * Simulate an async HTTP call with a delayed observable.
 */
function serverCall(meals: any, page: number): Observable<IServerResponse> {
    const perPage = 10;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return of({
            items: meals.slice(start, end),
            total: 200
        }).pipe(delay(100));
}
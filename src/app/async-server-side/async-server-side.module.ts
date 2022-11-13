import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncServerRoutingModule } from './async-server-side-routing';

import { NgxPaginationModule } from 'ngx-pagination';

import {  AsyncServerSideComponent } from './async-server-side.component';

@NgModule({
  imports: [
    CommonModule,
    AsyncServerRoutingModule, 
    NgxPaginationModule, 
  ],
  declarations: [AsyncServerSideComponent]
})
export class AsyncServerSideModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ServerRoutingModule } from './server-routing';

import { NgxPaginationModule } from 'ngx-pagination';

import {  ServerComponent } from './server.component';

@NgModule({
  imports: [
    CommonModule,
    ServerRoutingModule, 
    NgxPaginationModule, 
  ],
  declarations: [ServerComponent]
})
export class ServerModule { }
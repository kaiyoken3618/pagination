import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    BasicRoutingModule, 
    NgxPaginationModule, 
  ],
  declarations: [BasicComponent]
})
export class BasicModule { }
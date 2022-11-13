import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollStackRoutingModule } from './scroll-stack-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { LazyloadComponent, LazyloadDirective } from './scroll-stack.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollStackRoutingModule, 
    NgxPaginationModule, 
  ],
  declarations: [LazyloadComponent,LazyloadDirective]
})
export class ScrollStackModule { }
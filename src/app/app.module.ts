import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BasicComponent } from './basic/basic.component';
import { ScrollLoadComponent } from './scroll-load/scroll-load.component';
import { LazyloadComponent,LazyloadDirective } from './scroll-stack/scroll-stack.component';
import { ServerComponent } from './server-side/server.component';
//import { BasicModule } from './basic/basic.module';  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 
import { MatButtonModule} from '@angular/material/button'; 
import { MatSidenavModule} from '@angular/material/sidenav'; 
import { MatIconModule} from '@angular/material/icon';  
import {MatListModule} from '@angular/material/list'; 
import {MatToolbarModule} from '@angular/material/toolbar'


@NgModule({
  declarations: [
    AppComponent, 
    //BasicComponent, 
    //ServerComponent, 
    //ActualServerComponent, 
    ScrollLoadComponent,   
    //LazyloadComponent, 
    //LazyloadDirective,
     
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgxPaginationModule, 
    HttpClientModule, 
    BrowserAnimationsModule,  
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatToolbarModule,
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

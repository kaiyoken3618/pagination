import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
   
  {
    path: 'basic',
    loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
  },
  {
    path: 'scroll-stack',
    loadChildren: () => import('./scroll-stack/scroll-stack.module').then(m => m.ScrollStackModule)
  }, 
  {
    path: 'async-server-side',
    loadChildren: () => import('./async-server-side/async-server-side.module').then(m => m.AsyncServerSideModule)
  }, 
  {
    path: 'server-side',
    loadChildren: () => import('./server-side/server.module').then(m => m.ServerModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

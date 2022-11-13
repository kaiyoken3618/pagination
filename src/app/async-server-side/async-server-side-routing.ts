import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncServerSideComponent } from './async-server-side.component';

const routes: Routes = [
  {
    path: '',
    component: AsyncServerSideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncServerRoutingModule { }
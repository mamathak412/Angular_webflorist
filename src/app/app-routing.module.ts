import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowersComponent } from './flowers/flowers.component';
import { AdminComponent } from './admin/admin.component';
import { FlowersAddComponent } from './flowers/flowers-add/flowers-add.component';

const routes: Routes = [{
  path : 'flowers', component: FlowersComponent},
  {path : 'admin', component : AdminComponent},
  {path : 'flowersAdd', component : FlowersAddComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

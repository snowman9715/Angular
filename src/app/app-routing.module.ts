import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login2Component } from './components/login2/login2.component';

const routes: Routes = [
  {path:'login',component: Login2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

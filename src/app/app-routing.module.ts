import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadioComponent } from './component/radio/radio.component';


const routes: Routes = [
  {path:'radio',component:RadioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

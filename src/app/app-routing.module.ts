import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CascadeComponent } from './cascade/cascade.component';

const routes: Routes = [
  {path:'',component:CascadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

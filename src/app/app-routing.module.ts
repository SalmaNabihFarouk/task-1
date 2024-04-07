import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdataComponent } from './components/userdata/userdata.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path:"",component:UserdataComponent},

  {path:"details/:id",component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

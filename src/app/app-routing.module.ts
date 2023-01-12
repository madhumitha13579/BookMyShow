import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:FrontpageComponent},
  // {path:"", component:HomeComponent},
  {path:"cinema-time/home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

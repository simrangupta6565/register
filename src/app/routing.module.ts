import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddEditComponent } from './add-edit/add-edit.component';
const routes:Routes = [
  // { path:'', redirectTo:'', pathMatch:'full'},
  // {
  //     path:'ContactUs',
  //     component:ContactComponent
  // },
  {
      path:'AddEdit',
      component:AddEditComponent
  },
  {
      path:'SignUp',
      component:SignupComponent
  },
  {
      path:'Profile',
      component:ProfileComponent
  },
  {
      path:'Admin',
      component:AdminPageComponent    
  },
   {path: '', redirectTo: '/SignUp', pathMatch: 'full'},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }

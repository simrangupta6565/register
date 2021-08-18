import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RoutingModule } from './routing.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import{ MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';


import{ MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
;
import {MatMenuModule} from '@angular/material/menu';
// import {MatDividerModule, MatDivider} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './profile/profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MatTableModule } from '@angular/material/table'
import { UserService } from './services/user.service';
import { AddEditComponent } from './add-edit/add-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    AdminPageComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatCheckboxModule, 
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatTabsModule,
     MatCardModule,
    MatIconModule, 
    RoutingModule,
    FormsModule, ReactiveFormsModule,
    MatSnackBarModule,
    // MatDividerModule, MatDivider,
    MatMenuModule,
    MatListModule,
    MatTableModule,



  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

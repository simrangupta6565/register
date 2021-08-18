import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';

import {MAT_DIALOG_DATA, } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { StateService } from '../admin-page/state.service';
// export interface DialogData{
//   // index: '0'|'1';
//   index :'0';
// }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  form: FormGroup | undefined;
  newUser!: User;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, ]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;

  // getErrorMessage2(){
  //   if(this.password.hasError('required')){
  //     return 'You must enter a value';
  //   }
  //   if(this.password.hasError('pattern'))
  //   return 'Minimum 8-16 character 1 uppercase, 1 lowercase, 1 numeric, 1 special character' ;
  //   return '';
  // }
  
  constructor(  private _snackBar: MatSnackBar,
     private router: Router,
      private formBuilder: FormBuilder,
      private userService : UserService,
        private stateService: StateService) {}
  SignUpEmail: string | undefined;
  LogInEmail : string | undefined;
    AdminEmail :string |undefined;
 digit ='1';
 ngOnInit(): void {
  this.form = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    password: [''],
    // confirm: ['', [Validators.required, ]]


});

this.newUser = this.form.value;
// .then(users => this.users = users);
  
}

onSubmit(n:string, add:string, p:string, e:string, pass:string){
  
  this.newUser.name= n;
  this.newUser.address= add;
  this.newUser.phone=p;
  this.newUser.email= e;
  this.newUser.password=pass;
  this.userService.add(this.newUser);
  this.stateService.data = this.newUser;
  this.router.navigateByUrl('/Profile')
  this.digit='1';
}
openSnackBar( Id : string, password : string) {
  if(!(this.email.hasError('email')) && !(this.password.hasError('pattern')) && (Id.length !=0) && (password.length !=0) )
  {
      if(Id == 'John@gmail.com')
  {
    this._snackBar.open('Account already exists', 'Enter Password', 
    {
      duration: 10000,
      
       panelClass: ['mat-toolbar', 'mat-warn']
    });
    this.digit='1';
    this.LogInEmail= Id;

  }
  else
{  this._snackBar.open('You Signed In', '', 
  {
    duration: 4000,
     panelClass: ['mat-toolbar', 'mat-primary']
  });
}
  }
  else
  {
    this._snackBar.open('Please enter all credentials correctly', '', 
    {
      duration: 4000,
       panelClass: ['mat-toolbar', 'mat-warn']
    });
  }
}


openSnackBar2( Id : string, password : string) {
  if(!(this.email.hasError('email')) && (Id.length !=0) && (password.length !=0))
  {
  if(Id == 'John@gmail.com')
{
  if(password =='John@123')
  {
    this._snackBar.open('You Logged In', '', 
    {
      duration: 4000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    this.router.navigateByUrl('/Profile')
    this.digit='1';
    this.LogInEmail= Id;
  }
  else
  {
    this._snackBar.open('Incorrect Password', 'Enter Again', 
    {
      duration: 10000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
    this.digit='1';
    this.LogInEmail= Id;
  }
}
else
{  
  this._snackBar.open('Account Not Found', 'Please Sign Up', 
{
  duration: 10000,
  panelClass: ['mat-toolbar', 'mat-warn']
});
this.digit='0';
    this.SignUpEmail= Id;
}
}
else
{
  this._snackBar.open('Please enter all credentials correctly', '', 
  {
    duration: 4000,
     panelClass: ['mat-toolbar', 'mat-warn']
  });
}

}

openSnackBar3( Id : string, password : string) {
//   if(!(this.email.hasError('email')) && (Id.length !=0) && (password.length !=0))
//   {
//   if(Id == 'Admin@gmail.com')
// {
  if(Id == 'Admin@gmail.com' && password =='Admin@123')
  {
    this._snackBar.open('You Logged In', '', 
    {
      duration: 4000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    this.router.navigateByUrl('/Admin')
    this.digit='1';
    this.LogInEmail= Id;
  }
  else
  {
    this._snackBar.open('Enter Email: Admin@gmail.com and Password: Admin@123', 'Enter Again', 
    {
      duration: 10000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
    this.digit='1';
    this.LogInEmail= Id;
  }
}
// }
// else
// {  
//   this._snackBar.open('Account Not Found', 'Please Sign Up', 
// {
//   duration: 10000,
//   panelClass: ['mat-toolbar', 'mat-warn']
// });
// this.digit='0';
//     this.SignUpEmail= Id;
// }
// }
// else
// {
//   this._snackBar.open('Please enter all credentials correctly', '', 
//   {
//     duration: 4000,
//      panelClass: ['mat-toolbar', 'mat-warn']
//   });
// }

// }



  

}

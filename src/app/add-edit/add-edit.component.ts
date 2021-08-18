import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../admin-page/state.service';
import { UserService } from '../services/user.service';
import { User } from '../user';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  user!: User;
  form!: FormGroup;
    id!: number;
    isAddMode!: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private stateService : StateService,
        private userService :UserService,
    ) {}

  ngOnInit(): void {
    this.user = this.stateService.data;
    this.isAddMode= this.stateService.isAddMode;
 
    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
        passwordValidators.push(Validators.required);
    }

    this.form = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', passwordValidators]
    });

    if (!this.isAddMode) {
       
        this.userService.getUser(this.id); 
    }
  }

      // convenience getter for easy access to form fields
      get f() { return this.form.controls; }

      onSubmit() {
          this.submitted = true;
  
  console.log("onsubmit")
          // stop here if form is invalid
          if (this.form.invalid) {
              return;
          }
  
          this.loading = true;

          if (this.isAddMode) {
            console.log(this.isAddMode);
            
              this.createUser();
          } else {
              this.updateUser(this.user.id);
          }
      }
  
      private createUser() {
        console.log("create User");
        this.userService.add(this.form.value);
        this.router.navigateByUrl('/Admin')
      }
  
      private updateUser(id : number) {
        console.log(this.form.value);
        console.log(id);
        
       this.userService.put(this.form.value, id);
       this.router.navigateByUrl('/Admin')
          
      }

}

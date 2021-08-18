import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { StateService } from './state.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  users: User[] | undefined 

  selectedUser!: User;
  
  constructor(private userService : UserService, private stateService: StateService, private router: Router) {
    this.userService.getUsers()
    .then(users => this.users = users);
   }

  ngOnInit(): void {
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }
  
  deleteUser(id: number) {
    
    this.userService.delete(id).then(() => {
      // return this.onSelect();
    });
  }

  EditUser(user: User){
    console.log("edituser");
    this.stateService.data = user;
    this.stateService.isAddMode= false;
    this.router.navigateByUrl('/AddEdit')
  }

  AddUser(){
    this.stateService.isAddMode= true;
    this.router.navigateByUrl('/AddEdit')
  }
  LogOut(){
    this.router.navigateByUrl('/SignUp')
  }

}

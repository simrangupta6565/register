import { Component, OnInit } from '@angular/core';
import { StateService } from '../admin-page/state.service';
import {User} from 'src/app/user'
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  newUser!: User;
  constructor(private stateService : StateService, private router: Router) { }

  ngOnInit(): void {
    this.newUser = this.stateService.data;
  }
  LogOut(){
    this.router.navigateByUrl('/SignUp')
  }
}

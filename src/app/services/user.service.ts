import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';

import { User} from 'src/app/user';

const USERS: User[] =
[
    {
        id: 1,
        name: 'raj',
        address: 'Varanasi',
        phone: '4587465432',
        email: 'raj@email.com',
        password: '123456'
    },
    {
        id: 2,
        name: 'rohan',
        address: 'allahabad',
        phone: '7676677432',
        email: 'rohan@gmail.com',
        password: '234567',
    },
    {
        id: 3,
        name: 'sonam',
        address: 'Lucknow',
        phone: '8989898989',
        email: 'sonam@gmail.com',
        password: '345678'
    },
    {
        id: 4,
        name: 'Shreya',
        address: 'Kanpur',
        phone: '4546474546',
        email: 'shreya@gmail.com',
        password: '456789',
    },

]
@Injectable({
  providedIn: 'root'
})
export class UserService {
  get() {
    return new Promise(resolve => resolve(USERS));
  }

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUser(id: number): Promise<User> {
    return Promise.resolve(USERS.filter((user) => (user.id === id))[0]);
  }

  add(User: any) {
    console.log(User.name);
    User.id =USERS.length+1;
    
    return new Promise(resolve => {
      USERS.push(User);
      resolve(User);
    });
  }

  put(User: any, Id :number) {
    console.log(User.name);
    User.id = Id;
    console.log(User.id);
    
    return new Promise(resolve => {
      const index = USERS.map(e => e.id).indexOf(User.id);
      console.log(index);
      
      console.log(USERS[index]);
      USERS[index] = User;
      resolve(User);
    });
  }

  delete(ids: number) {
    return new Promise(resolve => {
    
      const index = USERS.map(e => e.id).indexOf(ids);
      console.log(index);
      USERS.splice(index, 1);
      resolve(true);
    });
}


  constructor() { }
}




import { Injectable } from '@angular/core';
import { User} from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  data!: User; 
  isAddMode: boolean =false;
  constructor() { }
}

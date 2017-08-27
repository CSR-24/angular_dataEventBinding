import { Component } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  isUserNameSet(event:any){
   return _.isEmpty(this.userName) ? true : false;
  }
  clearUserName(){
    this.userName = '';
  }
}

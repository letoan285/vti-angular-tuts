import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tuts';
  names: any[]  = [1,2,3,4,5,9,8,76,89898];
  isGood: boolean = true;
  getName(){
    return {
      person: {
        name: 'Le Van Toan',
        age: 30
      }
    }
  }
}

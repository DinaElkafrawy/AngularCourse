import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers : number[] = [];
  evenNumbers: number[] = [];

  startedGame(iNumber: {count: number}) {
    if(iNumber.count % 2 == 0){
      this.evenNumbers.push(iNumber.count);
    }
    else this.oddNumbers.push(iNumber.count);

  }
}

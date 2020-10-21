import { Component } from '@angular/core';
import { Timestamp } from 'rxjs-compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  colorChanged = true;
  clicks = [];
  count = 0;
  newColor = '';

  onClick() {
    this.colorChanged = !this.colorChanged;
    // this.count++;
    // this.clicks.push(this.count);
    this.clicks.push(new Date());
  }

  fifthLog() {
    return this.count === 5? true:false;
  }
  
  changeColor() {
    this.newColor = this.colorChanged ? 'green' : 'red';
    return this.count < 5? this.newColor : 'blue';
  }
}

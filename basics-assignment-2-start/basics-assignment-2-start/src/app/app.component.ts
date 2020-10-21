import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  emptyUsername = true;

  checkUsername() {
    if( this.username != '')
      this.emptyUsername = false;
    else 
      this.emptyUsername = true;

    return this.emptyUsername;
  }

  clearUsername() {
    this.username = '';
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 // @Output() start = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() incrementNumber = new EventEmitter<{count: number}>();
  i = 0;
  stopFlag = false;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.stopFlag = false;
    setInterval(() => {
       if(this.stopFlag) clearInterval(this.i);
       else {
        this.i = this.i + 1;
        this.incrementNumber.emit({count : this.i})}}, 1000);
       }
      

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  constructor(private usersService: UsersService){}

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}

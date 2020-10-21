import { Injectable } from "@angular/core";
import { CounterService } from './counter.service';
@Injectable()

export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counter: CounterService ){}

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counter.addInactive();
        console.log("Active to Inactive count: " + this.counter.inactiveNumber);
      }
    
      setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counter.addActive();
        console.log("Inactive to active count: " + this.counter.activeNumber);
      }
}
export class CounterService{
    inactiveNumber = 0; 
    activeNumber = 0;

    addActive(){
        this.activeNumber = this.activeNumber + 1;
    }

    addInactive(){
        this.inactiveNumber = this.inactiveNumber + 1;
    }
}
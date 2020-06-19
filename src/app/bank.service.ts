import { Injectable, EventEmitter } from '@angular/core';
//import { balance } from './account';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  //balance = 100;
  updateBalance = new EventEmitter<any>();
  deposit(value) {
    balance += value;
    this.updateBalance.emit(this.setBalance(balance))
  }
  whitdraw(value) {
    balance -= value;
    this.updateBalance.emit(this.setBalance(balance));
  }
  setBalance(balance){
    balance = balance;
  }
  getBalance() {
    return balance;
  }
}

export var balance = 100;

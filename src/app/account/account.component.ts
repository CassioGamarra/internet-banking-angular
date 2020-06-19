import { Component, EventEmitter} from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'], 
})

export class AccountComponent {

  constructor(
    private bankService: BankService
  ) { }

  updateBalance = new EventEmitter<any>();
  balance = this.bankService.getBalance();
  
  onWithdraw(){
    let value = parseFloat((<HTMLInputElement>document.getElementById('value')).value);
    if(!this.verify(value)){
      alert("Por favor, insira um valor maior que 0");
    }
    else if(value > this.balance){
      alert("Saldo insuficiente!");
    }
    else {
      this.bankService.whitdraw(value);
      this.balance = this.bankService.getBalance();
      window.alert('Saque realizado com sucesso!');
      (<HTMLInputElement>document.getElementById('value')).value = 'Valor...';
    }
  }

  deposit() {
    let value = parseFloat((<HTMLInputElement>document.getElementById('value')).value);
    if(!this.verify(value)){
      alert("Por favor, insira um valor maior que 0");
    } else {
      this.bankService.deposit(value);
      this.balance = this.bankService.getBalance();
      window.alert('Deposito realizado com sucesso!');
      (<HTMLInputElement>document.getElementById('value')).value = 'Valor...';
    }
  }

  verify(value){
    if(value > 0){
      return true;
    }
    return false;
  }
}


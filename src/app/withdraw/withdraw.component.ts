import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  @Input() balance;
  @Output() withdraw = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

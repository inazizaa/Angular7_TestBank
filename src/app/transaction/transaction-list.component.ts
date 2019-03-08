import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];
  constructor(private service: TransactionService) { }

  ngOnInit() {
    this.loadData();
  }


  loadData() {
    this.service.getTransactions().subscribe(res => {
      Object.assign(this.transactions, res['values']);
      console.log(this.transactions);

    })
  }

}

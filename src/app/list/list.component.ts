import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Account } from '../account';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Account: Account[] = [];
  constructor(private service: AccountService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe(res => {
      Object.assign(this.Account, res['values']);
      console.log(this.Account);
    })
  }

}

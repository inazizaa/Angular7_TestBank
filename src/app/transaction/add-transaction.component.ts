import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from './transaction';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  accounts: Account[] = [];
  constructor(private fb: FormBuilder, private service: TransactionService, private accountService: AccountService, private router: Router) { }
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      AccountId: ["", Validators.required],
      TransactionDate: ["", Validators.required],
      Description: ["", Validators.required],
      Amount: ["", Validators.required]
    });
    this.getAccount();
  }

  getAccount() {
    this.accountService.getAll().subscribe(res => {
      Object.assign(this.accounts, res["values"]);
      console.log(this.accounts);
    })
  }

  submit() {
    let trans: Transaction = new Transaction();
    trans.AccountId = this.form.controls["AccountId"].value;
    trans.TransactionDate = this.form.controls["TransactionDate"].value;
    trans.Description = this.form.controls["Description"].value;
    trans.Amount = this.form.controls["Amount"].value;

    this.service.insertData(trans).subscribe(res => {
      if (res['status'] == 500) {
        alert(res["values"]);
      } else {
        alert('Insert Success');
        this.router.navigate(["/transactions"]);
      }
    })

  }

  cancel() {
    this.router.navigate(["/transactions"]);
  }

}

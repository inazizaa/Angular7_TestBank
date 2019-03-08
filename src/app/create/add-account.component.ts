import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: AccountService, private router: Router) { }
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      Name: ["", Validators.required]
    });
  }

  submit() {
    let account: Account = new Account();
    account.Name = this.form.controls['Name'].value;
    this.service.insertData(account).subscribe(res => {
      alert("Insert Success");
      this.router.navigate(['/accounts']);
    }, err => {
      alert("insert Failed");
    })
  }

  cancel() {
    this.router.navigate(['/accounts']);
  }
}

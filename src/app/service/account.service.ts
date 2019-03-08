import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  BaseUrl = "http://localhost:3040/";
  constructor(private http: HttpClient) { }

  getAll() {
    const uri = this.BaseUrl + "accounts";
    return this.http.get(uri);
  }

  insertData(account: Account) {
    const uri = this.BaseUrl + "account";
    return this.http.post(uri, account);
  }
}

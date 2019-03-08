import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  BaseUrl = "http://localhost:3040/";
  constructor(private http: HttpClient) { }

  getTransactions() {
    const uri = this.BaseUrl + 'transactions';
    return this.http.get(uri);
  }

  insertData(transaction: Transaction) {
    const uri = this.BaseUrl + 'transaction';
    return this.http.post(uri, transaction);
  }

}

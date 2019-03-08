import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

import { AddAccountComponent } from './create/add-account.component';
import { TransactionListComponent } from './transaction/transaction-list.component';
import { AddTransactionComponent } from './transaction/add-transaction.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: ListComponent
  }, {
    path: 'create-account',
    component: AddAccountComponent
  }, {
    path: 'transactions',
    component: TransactionListComponent
  },
  {
    path: 'create-transaction',
    component: AddTransactionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

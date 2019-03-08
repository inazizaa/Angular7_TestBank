import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AddAccountComponent } from './create/add-account.component';
import { TransactionListComponent } from './transaction/transaction-list.component';
import { AddTransactionComponent } from './transaction/add-transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddAccountComponent,
    TransactionListComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

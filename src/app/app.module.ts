import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomersDetailsComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

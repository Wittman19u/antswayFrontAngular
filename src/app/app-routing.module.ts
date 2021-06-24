import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

const routes: Routes = [
  { path: 'getAll', component: CustomersListComponent },
  { path: 'get/:id', component: CustomersDetailsComponent },
  { path: 'add', component: CreateCustomerComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

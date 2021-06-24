import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: any;

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getAllCustomers()
  }

  getAllCustomers(): void {
    this.customersService.getAll().subscribe(
      data => {
        this.customers = data;
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

}

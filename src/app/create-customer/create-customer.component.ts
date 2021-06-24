import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../customers.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  /*newCustomer = {
    firstname: "",
    lastname: "",
    address: "",
    phoneNumber: ""
  }*/

  saveCustomerForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    address: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  })

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  saveCustomer(): void{
    this.customersService.create(this.saveCustomerForm.value).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/getAll']);
      },
      error => {
        console.log(error)
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/customers.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})
export class CustomersDetailsComponent implements OnInit {

  customer: any;

  updateCustomerForm: any;

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
  }

  getCustomer(id: any): void {
    this.customersService.get(id).subscribe(
      data => {
        this.customer = data;
        this.updateCustomerForm = this.formBuilder.group({
          firstname: [this.customer.firstname, Validators.required],
          lastname: [this.customer.lastname, Validators.required],
          address: [this.customer.address, Validators.required],
          phoneNumber: [this.customer.phoneNumber, Validators.required]
        })
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }
 
  updateCustomer(): void {
    this.customersService.update(this.customer.id, this.updateCustomerForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/getAll']);
        },
        error => {
          console.log(error);
        });
  }

  deleteCustomer(): void {
    this.customersService.delete(this.customer.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/getAll']);
        },
        error => {
          console.log(error);
        });
  }  

}

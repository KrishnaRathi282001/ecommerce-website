import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
Customers: Customer[] = [{
  customerNo: 1,
  name: "Rahuld Dravid",
  address:"",
  City:"Banglore",
  state:"Karnataka",
  country:'India',
},
];
selectedCustomer: Customer = new Customer()
constructor(){}
ngOnInit(){}
showDetails(customer: Customer){
  this.selectedCustomer = Object.assign({},customer);
}
update(customer: Customer){
  let cust: any = this.Customers.find(
    (e) => e.customerNo == customer.customerNo
  );
  Object.assign(cust,customer);
  alert("customer Saved")
}
}



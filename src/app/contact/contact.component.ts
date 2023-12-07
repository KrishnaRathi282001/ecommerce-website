import { Component,EventEmitter,Input, Output} from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
@Input() customer:Customer= new Customer();
@Output() customerChange:EventEmitter<Customer>= new EventEmitter<Customer>();
constructor() {}
ngOnInit() {}

update(){
  this.customerChange.emit(this.customer)
}
}

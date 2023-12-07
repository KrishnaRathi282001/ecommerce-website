import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bolg',
  templateUrl: './bolg.component.html',
  styleUrls: ['./bolg.component.css']
})
export class BolgComponent {
@Input() name: any = "";
}

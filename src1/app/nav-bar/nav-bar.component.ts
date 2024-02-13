import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
 country:string[]=['IN','US','Uk','AS','PAK','AF','AJ'];
 navBarElements:any=[{
  name:'Offers',
  path: '/offers',
 },
 {
  name:'Products',
  path: '/Products',
 },
 {
  name:'Catalog',
  path: '/Catalog',
 },
 {
  name:'Services',
  path: '/Services',
 },
 {
  name:'About',
  path: '/About',
 },
];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   onResize(event){
     console.log(event.target.innerWidth); // window width
   }

}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Civic Idea';

  constructor(private router: Router, private _scrollToService: ScrollToService) { }
    
  ngOnInit() {
  	 this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        if(evt.url.indexOf('/#') === 0)
          return;

        this._scrollToService
          .scrollTo({
            offset: 0,
            container: 'body',
            easing: 'easeInOutQuart',
            duration: 1000
          });
      });
  }
}

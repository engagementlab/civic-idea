import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { fadeInAnimation } from '../_animations/fade';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomepageComponent implements OnInit {

  index: any;
  modules: any[];
  
  getData(): void {
    this.jsonSvc.getAllData('index')
        .subscribe(response => {
          
          let modulesMap = response.get("modules");
          this.modules = Array.from(modulesMap.values());
          this.index = response.get("index");
          
        });
  }

  public triggerScrollTo(id: string) {
    
    this._scrollToService
      .scrollTo({
        target: id,
        easing: 'easeOutElastic',
        duration: 2000
      });
  }

  constructor(private jsonSvc: JsonService, private _scrollToService: ScrollToService) { }

  ngOnInit() {
    this.getData();
  }

}

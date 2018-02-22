import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { fadeInAnimation } from '../_animations/fade';

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
    this.isLoading = true;
    this.jsonSvc.getAllData('index')
        .subscribe(response => {
          
          let modulesMap = response.get("modules");
          this.modules = Array.from(modulesMap.values());
          this.index = response.get("index");
          
        });
  }

  isLoading: boolean

  constructor(private jsonSvc: JsonService) { }

  ngOnInit() {
    this.getData();
  }

}

import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { fadeInAnimation } from '../_animations/fade';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class GuidesComponent implements OnInit {

	modules: any[];
  
  getData(): void {
    // this.jsonSvc.getAllData('index')
    //     .subscribe(response => {
          
    //       let modulesMap = response.get("modules");
    //       this.modules = Array.from(modulesMap.values());
          
    //     });
  }
  
  constructor(private jsonSvc: JsonService) { }

  ngOnInit() {
    this.getData();
  }

}

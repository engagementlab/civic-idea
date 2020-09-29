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
  
  async getData() {
    const response = await this.jsonSvc.getAllData('index');
    let modulesMap = response[1];
    this.modules = Array.from(modulesMap.values());
  }
  
  constructor(private jsonSvc: JsonService) { }

  ngOnInit() {
    this.getData();
  }

}

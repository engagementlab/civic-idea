import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

	modules: any[];
  
  getData(): void {
    this.jsonSvc.getAllData('index')
        .subscribe(response => {
          
          let modulesMap = response.get("modules");
          this.modules = Array.from(modulesMap.values());
          
        });
  }
  
  constructor(private jsonSvc: JsonService) { }

  ngOnInit() {
    this.getData();
  }

}

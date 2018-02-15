import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  getModules(): void {
    this.jsonSvc.getModules()
        .subscribe(response => this.modules = response.data);
  }

  modules: any[];

  constructor(private jsonSvc: JsonService) { }

  ngOnInit() {
    this.getModules();
  }

}

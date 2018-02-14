import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../module/module.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  getModules(): void {
    this.moduleSvc.getModules()
        .subscribe(response => this.tools = response.data);
  }

  tools: any[];

  constructor(private moduleSvc: ModuleService) { }

  ngOnInit() {
    this.getModules();
  }

}

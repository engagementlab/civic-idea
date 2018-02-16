import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  getModules(): void {
    this.isLoading = true;
    this.jsonSvc.getModules()
        .subscribe(response => this.modules = response.data; this.isLoading = false;);
  }

  modules: any[];
  isLoading: boolean

  constructor(private jsonSvc: JsonService) { }

  ngOnInit() {
    this.getModules();
  }

}

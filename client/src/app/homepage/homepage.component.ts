import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  index: any;
  modules: any[];
  
  getData(): void {
    this.isLoading = true;
    this.jsonSvc.getAllData()
        .subscribe(response => {
          
          this.modules = response.modules;
          this.index = response.indexPage;
          
        });
  }

  isLoading: boolean

  constructor(private jsonSvc: JsonService) { }

  ngOnInit() {
    this.getData();
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JsonService } from '../json.service';
import { fadeInAnimation } from '../_animations/fade';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  encapsulation: ViewEncapsulation.None
})
export class ModuleComponent implements OnInit {
	
	module: any;
	moduleId: string;

	async getModule() {      
      const response = await this.jsonSvc.getAllData('module/'+this.moduleId);
      this.module = response;
	}

	constructor(private route: ActivatedRoute, private router: Router, private jsonSvc: JsonService) {
    
    // console.log(this.route.snapshot)
		this.moduleId = this.route.snapshot.url[1].path;
		this.getModule();

	}

  ngOnInit() {

  }

}

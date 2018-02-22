import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JsonService } from '../json.service';
import { fadeInAnimation } from '../_animations/fade';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
  encapsulation: ViewEncapsulation.None
})
export class ModuleComponent implements OnInit {
	
	module: any;
	moduleId: string;

	getModule() {

    this.jsonSvc.getAllData('module/'+this.moduleId)
        .subscribe(response => {
          this.module = response.get(this.moduleId);
        });

	}

	constructor(private route: ActivatedRoute, private router: Router, private jsonSvc: JsonService) {
		
		this.moduleId = this.route.snapshot.params.id;
		this.getModule();

	}

  ngOnInit() {

  }

}

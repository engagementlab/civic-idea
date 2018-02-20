import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JsonService } from '../json.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModuleComponent implements OnInit {
	
	module: any;
	moduleId: string;

	getModule() {

    this.jsonSvc.getAllData()
        .subscribe(response => {
          this.module = response.modules.filter(module => module.url === this.moduleId)[0];
        });

	}

	constructor(private route: ActivatedRoute, private router: Router, private jsonSvc: JsonService) {
		
		this.moduleId = this.route.snapshot.params.id;
		this.getModule();

	}

  ngOnInit() {

  }

}

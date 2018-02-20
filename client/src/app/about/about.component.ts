import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	about: any;
	getData() {

    this.jsonSvc.getAllData()
		    .subscribe(response => {
		    	this.about = response.aboutPage;
		    });

	}

  constructor(private route: ActivatedRoute, private router: Router, private jsonSvc: JsonService) {
  
  	this.getData();
  
  }

  ngOnInit() {}

}

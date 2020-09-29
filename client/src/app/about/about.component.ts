import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JsonService } from '../json.service';
import { fadeInAnimation } from '../_animations/fade';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

	about: any;
	async getData() {

    const response = await this.jsonSvc.getAllData('about');
    this.about = response[0];

	}

  constructor(private route: ActivatedRoute, private router: Router, private jsonSvc: JsonService) {
  
  	this.getData();
  
  }

  ngOnInit() {}

}

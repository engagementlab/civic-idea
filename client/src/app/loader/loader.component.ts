import { Component, OnInit, Injectable, Input } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

@Injectable()
export class LoaderComponent implements OnInit {

	isLoading: boolean;
  constructor(private jsonSvc: JsonService) {
		
		this.jsonSvc.isLoading.subscribe( value => {
        this.isLoading = value;
        console.log(value)
    } );
  
  }

  ngOnInit() {
  }

  startLoading() {

  	this.isLoading = true;

  	// setTimeout(() => {
  	// 	this.isLoading = false;
  	// },
  	// 500);

  }
  stopLoading() {

  	// this.isLoading = false;
  	console.log('stop')

  }


}

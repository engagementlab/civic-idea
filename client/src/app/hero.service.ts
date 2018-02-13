import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service';

import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

	api_url = 'http://localhost:3000';
	todoUrl = `${this.api_url}/api/heroes`;

  // constructor(private messageService: MessageService) { }
  constructor(
	    private http: HttpClient
	) { }

	getHeroes(): Observable<Hero[]> {

	  // this.messageService.add('HeroService: fetched heroes');
	  return this.http.get(this.todoUrl+'/get')
	  .map(res => {
	  	return res["data"] as Hero[];
	  });
		// return of(HEROES);
	}

}

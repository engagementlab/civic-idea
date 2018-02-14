import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { catchError } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ModuleService {

	api_url = 'http://localhost:3000';
	todoUrl = `${this.api_url}/api/modules`;

  // constructor(private messageService: MessageService) { }
  constructor(
	    private http: HttpClient
	) {}

	/*private handleError(error: HttpErrorResponse) {
		
		if (error.error instanceof ErrorEvent) {
		  // A client-side or network error occurred. Handle it accordingly.
		  console.error('An error occurred:', error.error.message);
		} else {
		  // The backend returned an unsuccessful response code.
		  // The response body may contain clues as to what went wrong,
		  console.error(
		    `Backend returned code ${error.status}, ` +
		    `body was: ${error.error}`);
		}
		
		throw Observable.throw('Something bad happened; please try again later.');
	
	};*/

	getModules(): Observable<any> {

	  return this.http.get(this.todoUrl+'/get')
    .map((res:any)=> res)
    .catch((error:any) => { 
        return Observable.throw(error);
    })
	}
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { catchError } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class JsonService {

	baseUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

	getModules(): Observable<any> {

	  return this.http.get(this.baseUrl+'modules/get')
    .map((res:any)=> res)
    .catch((error:any) => { 
        return Observable.throw(error);
    })
	}

	getModuleByUrl(url: string): Observable<any> {

		// debugger;
	  return this.http.get(this.baseUrl+'modules/get/'+url)
    .map((res:any)=> res)
    .catch((error:any) => { 
        return Observable.throw(error);
    })
	}
}

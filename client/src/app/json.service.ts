import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { catchError } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class JsonService {

	baseUrl = 'http://localhost:3000/api/';

    constructor(private http: HttpClient) {}

    modules: any[];
    index: any;
    data: any;
    haveData: boolean;
	
    getAllData(): Observable<any> {

        if(this.haveData) {
            console.log('haveData');
            return Observable.of(this.data).map((d:any) => d);
        }
        else  {
            return this.http.get(this.baseUrl+'modules/get')
            .map((res:any)=> {
              this.data = res.data;
              this.haveData = true;

              return res.data;
            })
            .catch((error:any) => { 
                return Observable.throw(error);
            })

        }
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

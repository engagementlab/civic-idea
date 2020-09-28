import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class JsonService {

    baseUrl: string;
    public isLoading: Subject<boolean> = new Subject<boolean>();

    constructor(private http: HttpClient) {

        this.baseUrl = 'https://civicidea.org';

    }

    index: any;
    data = new Map<string, any>();
    modules = new Map<string, any>();

    assembleData(newData: any, type: string) {

        if(type.indexOf('module/') > -1) {
            this.modules.set(newData.url, newData);
            this.isLoading.next(false);

            return this.modules;
        }

        switch(type) {
            case 'index':
                this.data.set("index", newData[0]);

                newData[1].forEach((element) => {
                    this.modules.set(element.url, element);
                });
                this.data.set("modules", this.modules);
                break;
            case 'guides':
                newData[0].forEach((element) => {
                    this.modules.set(element.url, element);
                });
                break;
            case 'about':
                this.data.set("about", newData[0]);
                break;
        }

        this.isLoading.next(false);

        return this.data;
    }

    haveData(type: string) {

        let have: boolean;

        if(type.indexOf('module/') > -1 && this.modules.has(type.replace('module/','')))
            return true;
        
        switch(type) {
            case 'index':
                have = this.data.get("index") !== undefined && this.data.get("modules") !== undefined && this.data.get("modules").length > 1;
                break;
            case 'guides':
                have = this.modules.size > 1;
                break;
            case 'about':
                have = this.data.get("about") !== undefined;
                break;
        }

        return have;

    }
	
    getAllData(type: string): Promise<unknown> {

        const content =  new Promise<unknown>((resolve, reject) => {
        
            return this.http.get(`${this.baseUrl}/api/get/${type}`).toPromise().then(res =>{
            //   console.log(`get data from ${url}`,this.http.get(url))
              
              // Cache result in state
            //   this.transferState.setState('index', res);
              resolve(res['data']);
              return res['data'];
            })
            .catch((error: any) => {
              reject(error);
              console.error(error)
              this.isLoading.next(false);
              return throwError(error);
            });
    
          });
          return content;
/* 
        if(type.indexOf('module/') > -1 && this.haveData(type))
            return Observable.of(this.modules).map((d:any) => d);
        else if(this.haveData(type)) {
            return Observable.of(this.data).map((d:any) => d);
        }
        else  {
            this.isLoading.next(true);
            return this.http.get(this.baseUrl+'get/'+type)
            .map((res:any)=> {
              return this.assembleData(res.data, type);
            })
            .catch((error:any) => { 
                this.isLoading.next(false);
                return Observable.throw(error);
            })

        } */


	}
}

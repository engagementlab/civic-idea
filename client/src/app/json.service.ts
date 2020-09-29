import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';

@Injectable()
export class JsonService {

    baseUrl: string;
    public isLoading: Subject<boolean> = new Subject<boolean>();

    constructor(private http: HttpClient, 
        private transferState: TransferStateService) {

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

        // If scully is building or dev build, cache data from content API in transferstate
        if (!isScullyGenerated()) {
        const content = new Promise < unknown > ((resolve, reject) => {

            return this.http.get(`${this.baseUrl}/api/get/${type}`).toPromise().then(res => {
                //   Cache result in state
                this.transferState.setState(type, res['data']);
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
        } else {
        const state = new Promise < unknown[] > ((resolve, reject) => {
            try {
            this.transferState
                .getState < unknown[] > (type)
                .subscribe(res => {
                console.log('res', res)
                resolve(res)
                return res;
                });
            } catch (error) {
            this.isLoading.next(false);
            }
        });
        return state;
        }

	}
}

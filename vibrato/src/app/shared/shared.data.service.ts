import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {
    private static _instance: SharedDataService = new SharedDataService();
    public changeColor: BehaviorSubject<any> = new BehaviorSubject('');
    constructor(){
      SharedDataService._instance = this;
    }
    public static getInstance(): SharedDataService {
        return SharedDataService._instance;
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl =
    'https://gist.githubusercontent.com/HariKrishnaE-1288/ed851de051b8e78af8d0011a12747155/raw/12b3217ae6d33b007be9be02f654716a7226d2f9/employees.04052021.json';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

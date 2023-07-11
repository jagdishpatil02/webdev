import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.fetchData();
  }
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  employeeData: any;
  error: string = '';
  title: string = 'jasmin-karma';

  fetchData() {
    this.appService.fetchData().subscribe(
      (response) => {
        debugger;
        this.employeeData = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  add(): void {
    this.result = this.num1 + this.num2;
  }

  subtract(num1: number, num2: number): number {
    this.result = num1 - num2;
    return this.result;
  }

  multiply(): void {
    this.result = this.num1 * this.num2;
  }

  divide(): void {
    this.result = this.num1 / this.num2;
  }
}

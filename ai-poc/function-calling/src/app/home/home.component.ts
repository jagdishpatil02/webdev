import { Component, OnInit } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  contentGcOutput: string = '';
  response: any;

  ngOnInit(): void {
    let contentlist: NodeListOf<Element> =
      document.querySelectorAll('.content');
    let contentlistArr: HTMLElement[] = Array.from(
      contentlist
    ) as HTMLElement[];
    contentlistArr.forEach((element: HTMLElement) => {
      element.addEventListener('paste', function (e: ClipboardEvent) {
        e.preventDefault();
        const text = e.clipboardData?.getData('text/plain');
        document.execCommand('insertText', false, text);
      });
    });
  }

  genrateCode() {
    this.homeService
      .generateCode(this.contentGcOutput)
      .subscribe((res: any) => {
        this.response = res;
      });
  }
}

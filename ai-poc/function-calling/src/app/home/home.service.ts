import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  generateCode(content: string) {
    const body = {
      model: 'gpt-3.5-turbo-0613',
      messages: [
        {
          role: 'user',
          content:
            'explain this topic in the context of Kabhi Khushi Kabhie Gham, Kuch Kuch Hota Hai bollywood movie',
        },
        { role: 'function', name: 'convertCode', content: `${content}` },
      ],
      functions: [
        {
          name: 'convertCode',
          description:
            'explain this topic in the context of kabhi khushi kabhi ghum and Kuch Kuch Hota Hai  ',
          parameters: {
            type: 'object',
            properties: {
              kkkg: {
                type: 'string',
                description: 'the movie name is Kabhi Khushi Kabhie Gham ',
              },
              kkkh: {
                type: 'string',
                description: 'the movie name is Kuch Kuch Hota Hai',
              },
            },
            required: ['kkkg, kkkh'],
          },
        },
      ],
      function_call: 'auto',
    };
    return this.http.post(this.apiUrl, body);
  }
}

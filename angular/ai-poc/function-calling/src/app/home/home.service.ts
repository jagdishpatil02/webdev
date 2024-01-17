import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  generateCode(code: string) {
    const body = {
      model: 'gpt-3.5-turbo-0613',
      messages: [
        {
          role: 'user',
          content: 'convert this code in python, c and java',
        },
        { role: 'function', name: 'convertCode', content: `${code}` },
      ],
      functions: [
        {
          name: 'convertCode',
          description: 'convert this code in python, c and java ',
          parameters: {
            type: 'object',
            properties: {
              python: {
                type: 'object',
                description: 'the language is python ',
              },
              c: {
                type: 'object',
                description: 'the language is c',
              },
              java: {
                type: 'object',
                description: 'the language is java',
              },
            },
            required: ['python, c, java'],
          },
        },
      ],
      function_call: 'auto',
    };
    return this.http.post(this.apiUrl, body);
  }
}

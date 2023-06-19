import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { OpenAIApi, Configuration } from 'openai';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  constructor() {}
}

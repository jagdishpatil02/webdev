import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService],
    })
  );
  beforeEach(() => {
    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch data from the API', () => {
    const testData = { name: 'John Doe' };

    service.fetchData().subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(
      'https://gist.githubusercontent.com/HariKrishnaE-1288/ed851de051b8e78af8d0011a12747155/raw/12b3217ae6d33b007be9be02f654716a7226d2f9/employees.04052021.json'
    );
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should contain specific data in the API response', () => {
    const expectedData = { id: 1, name: 'John Doe', age: 25 };

    service.fetchData().subscribe((response) => {
      console.log('expectedData', expectedData);
      console.log('rs', response);
      expect(response).toContain(expectedData);
    });

    const req = httpMock.expectOne(
      'https://gist.githubusercontent.com/HariKrishnaE-1288/ed851de051b8e78af8d0011a12747155/raw/12b3217ae6d33b007be9be02f654716a7226d2f9/employees.04052021.json'
    );
    req.flush([expectedData]);
  });
});

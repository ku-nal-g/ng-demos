import { TestBed,async,fakeAsync,tick} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BaseHttpService } from './base-http.service';

describe('BaseHttpService', () => {
  let service: BaseHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseHttpService]
    });
    service = TestBed.inject(BaseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

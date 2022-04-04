import { TestBed } from '@angular/core/testing';

import { CascadeDropdownDataService } from './cascade-dropdown-data.service';

describe('CascadeDropdownDataService', () => {
  let service: CascadeDropdownDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CascadeDropdownDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

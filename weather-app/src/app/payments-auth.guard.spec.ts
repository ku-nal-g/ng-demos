import { TestBed } from '@angular/core/testing';

import { PaymentsAuthGuard } from './payments-auth.guard';

describe('PaymentsAuthGuard', () => {
  let guard: PaymentsAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentsAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

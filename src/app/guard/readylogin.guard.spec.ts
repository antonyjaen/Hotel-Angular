import { TestBed } from '@angular/core/testing';

import { ReadyloginGuard } from './readylogin.guard';

describe('ReadyloginGuard', () => {
  let guard: ReadyloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReadyloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

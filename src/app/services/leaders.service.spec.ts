import { TestBed } from '@angular/core/testing';

import { LeadersService } from './leader.service';

describe('LeadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadersService = TestBed.get(LeadersService);
    expect(service).toBeTruthy();
  });
});

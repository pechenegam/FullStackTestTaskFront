import { TestBed } from '@angular/core/testing';

import { AllUsersConversionsResolver } from './all-users-conversions.resolver';

describe('AllUsersConversionsResolver', () => {
  let resolver: AllUsersConversionsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllUsersConversionsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

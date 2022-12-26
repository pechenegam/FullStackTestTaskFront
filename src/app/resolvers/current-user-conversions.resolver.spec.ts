import { TestBed } from '@angular/core/testing';

import { CurrentUserConversionsResolver } from './current-user-conversions.resolver';

describe('CurrentUserConversionsResolver', () => {
  let resolver: CurrentUserConversionsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CurrentUserConversionsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { profileService } from './profile.service';

describe('ProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: profileService = TestBed.get(profileService);
    expect(service).toBeTruthy();
  });
});

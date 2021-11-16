import { TestBed } from '@angular/core/testing';

import { AdministrativeServiceService } from './administrative-service.service';

describe('AdministrativeServiceService', () => {
  let service: AdministrativeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministrativeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

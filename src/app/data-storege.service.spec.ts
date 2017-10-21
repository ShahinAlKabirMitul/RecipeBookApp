import { TestBed, inject } from '@angular/core/testing';

import { DataStoregeService } from './data-storege.service';

describe('DataStoregeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStoregeService]
    });
  });

  it('should be created', inject([DataStoregeService], (service: DataStoregeService) => {
    expect(service).toBeTruthy();
  }));
});

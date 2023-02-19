import { TestBed } from '@angular/core/testing';

import { SellFirestoreService } from './sell-firestore.service';

describe('SellFirestoreService', () => {
  let service: SellFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PokedexFirestoreService } from './pokedex-firestore.service';
import { orderBy } from '@firebase/firestore';
describe('PokedexFirestoreService', () => {
  let service: PokedexFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

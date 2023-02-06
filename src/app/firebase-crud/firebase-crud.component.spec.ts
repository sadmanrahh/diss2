import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCrudComponent } from './firebase-crud.component';

describe('FirebaseCrudComponent', () => {
  let component: FirebaseCrudComponent;
  let fixture: ComponentFixture<FirebaseCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebaseCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

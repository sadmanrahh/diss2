import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCrudadminComponent } from './firebase-crudadmin.component';

describe('FirebaseCrudadminComponent', () => {
  let component: FirebaseCrudadminComponent;
  let fixture: ComponentFixture<FirebaseCrudadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseCrudadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebaseCrudadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

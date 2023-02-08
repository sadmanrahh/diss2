import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeadminComponent } from './becomeadmin.component';

describe('BecomeadminComponent', () => {
  let component: BecomeadminComponent;
  let fixture: ComponentFixture<BecomeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsadminComponent } from './termsadmin.component';

describe('TermsadminComponent', () => {
  let component: TermsadminComponent;
  let fixture: ComponentFixture<TermsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

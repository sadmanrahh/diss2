import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageadminComponent } from './usageadmin.component';

describe('UsageadminComponent', () => {
  let component: UsageadminComponent;
  let fixture: ComponentFixture<UsageadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutadminComponent } from './aboutadmin.component';

describe('AboutadminComponent', () => {
  let component: AboutadminComponent;
  let fixture: ComponentFixture<AboutadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedScreeningComponent } from './submitted-screening.component';

describe('SubmittedScreeningComponent', () => {
  let component: SubmittedScreeningComponent;
  let fixture: ComponentFixture<SubmittedScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

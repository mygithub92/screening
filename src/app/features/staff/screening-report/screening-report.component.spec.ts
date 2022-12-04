import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningReportComponent } from './screening-report.component';

describe('ScreeningReportComponent', () => {
  let component: ScreeningReportComponent;
  let fixture: ComponentFixture<ScreeningReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

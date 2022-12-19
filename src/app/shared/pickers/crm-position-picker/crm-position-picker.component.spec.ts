import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPositionPickerComponent } from './crm-position-picker.component';

describe('CrmPositionPickerComponent', () => {
  let component: CrmPositionPickerComponent;
  let fixture: ComponentFixture<CrmPositionPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPositionPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPositionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

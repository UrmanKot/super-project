import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripExpensesTableComponent } from './trip-expenses-table.component';

describe('TripExpensesTableComponent', () => {
  let component: TripExpensesTableComponent;
  let fixture: ComponentFixture<TripExpensesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripExpensesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripExpensesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

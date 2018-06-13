import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpComponent } from './add-exp.component';

describe('AddExpComponent', () => {
  let component: AddExpComponent;
  let fixture: ComponentFixture<AddExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

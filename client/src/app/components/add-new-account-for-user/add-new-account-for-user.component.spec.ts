import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAccountForUserComponent } from './add-new-account-for-user.component';

describe('AddNewAccountForUserComponent', () => {
  let component: AddNewAccountForUserComponent;
  let fixture: ComponentFixture<AddNewAccountForUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewAccountForUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAccountForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

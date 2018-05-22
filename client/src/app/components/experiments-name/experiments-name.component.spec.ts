import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsNameComponent } from './experiments-name.component';

describe('ExperimentsNameComponent', () => {
  let component: ExperimentsNameComponent;
  let fixture: ComponentFixture<ExperimentsNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

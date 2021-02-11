import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraEditComponent } from './tra-edit.component';

describe('TraEditComponent', () => {
  let component: TraEditComponent;
  let fixture: ComponentFixture<TraEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraComponent } from './tra.component';

describe('TraComponent', () => {
  let component: TraComponent;
  let fixture: ComponentFixture<TraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

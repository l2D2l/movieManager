import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleObjectComponent } from './circle-object.component';

describe('CircleObjectComponent', () => {
  let component: CircleObjectComponent;
  let fixture: ComponentFixture<CircleObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

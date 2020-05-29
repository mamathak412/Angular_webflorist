import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersAddComponent } from './flowers-add.component';

describe('FlowersAddComponent', () => {
  let component: FlowersAddComponent;
  let fixture: ComponentFixture<FlowersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

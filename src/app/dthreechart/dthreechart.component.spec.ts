import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DthreechartComponent } from './dthreechart.component';

describe('DthreechartComponent', () => {
  let component: DthreechartComponent;
  let fixture: ComponentFixture<DthreechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DthreechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DthreechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

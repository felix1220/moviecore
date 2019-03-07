import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCanvasComponent } from './angular-canvas.component';

describe('AngularCanvasComponent', () => {
  let component: AngularCanvasComponent;
  let fixture: ComponentFixture<AngularCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

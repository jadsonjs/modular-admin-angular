import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsFlotComponent } from './charts-flot.component';

describe('ChartsFlotComponent', () => {
  let component: ChartsFlotComponent;
  let fixture: ComponentFixture<ChartsFlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsFlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsFlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

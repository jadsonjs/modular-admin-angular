import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesResponsiveComponent } from './tables-responsive.component';

describe('TablesResponsiveComponent', () => {
  let component: TablesResponsiveComponent;
  let fixture: ComponentFixture<TablesResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

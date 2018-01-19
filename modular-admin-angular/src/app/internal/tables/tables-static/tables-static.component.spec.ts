import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesStaticComponent } from './tables-static.component';

describe('TablesStaticComponent', () => {
  let component: TablesStaticComponent;
  let fixture: ComponentFixture<TablesStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivePanelComponent } from './responsive-panel.component';

describe('ResponsivePanelComponent', () => {
  let component: ResponsivePanelComponent;
  let fixture: ComponentFixture<ResponsivePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

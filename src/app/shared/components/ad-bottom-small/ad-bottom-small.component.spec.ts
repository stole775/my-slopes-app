import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBottomSmallComponent } from './ad-bottom-small.component';

describe('AdBottomSmallComponent', () => {
  let component: AdBottomSmallComponent;
  let fixture: ComponentFixture<AdBottomSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdBottomSmallComponent]
    });
    fixture = TestBed.createComponent(AdBottomSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

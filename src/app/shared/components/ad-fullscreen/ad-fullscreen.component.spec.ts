import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFullscreenComponent } from './ad-fullscreen.component';

describe('AdFullscreenComponent', () => {
  let component: AdFullscreenComponent;
  let fixture: ComponentFixture<AdFullscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdFullscreenComponent]
    });
    fixture = TestBed.createComponent(AdFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

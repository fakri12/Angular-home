import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosSlideComponent } from './logos-slide.component';

describe('LogosSlideComponent', () => {
  let component: LogosSlideComponent;
  let fixture: ComponentFixture<LogosSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

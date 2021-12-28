import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownNavBarComponent } from './down-nav-bar.component';

describe('DownNavBarComponent', () => {
  let component: DownNavBarComponent;
  let fixture: ComponentFixture<DownNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

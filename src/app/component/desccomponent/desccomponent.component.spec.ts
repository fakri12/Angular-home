import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesccomponentComponent } from './desccomponent.component';

describe('DesccomponentComponent', () => {
  let component: DesccomponentComponent;
  let fixture: ComponentFixture<DesccomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesccomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesccomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

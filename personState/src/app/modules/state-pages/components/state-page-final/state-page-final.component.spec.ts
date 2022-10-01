import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePageFinalComponent } from './state-page-final.component';

describe('StatePageFinalComponent', () => {
  let component: StatePageFinalComponent;
  let fixture: ComponentFixture<StatePageFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatePageFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatePageFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

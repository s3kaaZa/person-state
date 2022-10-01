import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePageStartComponent } from './state-page-start.component';

describe('StatePageStartComponent', () => {
  let component: StatePageStartComponent;
  let fixture: ComponentFixture<StatePageStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatePageStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatePageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

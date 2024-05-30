import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportarComponent } from './aportar.component';

describe('AportarComponent', () => {
  let component: AportarComponent;
  let fixture: ComponentFixture<AportarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AportarComponent]
    });
    fixture = TestBed.createComponent(AportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

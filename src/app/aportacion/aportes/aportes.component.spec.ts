import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportesComponent } from './aportes.component';

describe('AportesComponent', () => {
  let component: AportesComponent;
  let fixture: ComponentFixture<AportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AportesComponent]
    });
    fixture = TestBed.createComponent(AportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

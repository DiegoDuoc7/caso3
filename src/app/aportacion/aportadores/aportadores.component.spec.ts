import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportadoresComponent } from './aportadores.component';

describe('AportadoresComponent', () => {
  let component: AportadoresComponent;
  let fixture: ComponentFixture<AportadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AportadoresComponent]
    });
    fixture = TestBed.createComponent(AportadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

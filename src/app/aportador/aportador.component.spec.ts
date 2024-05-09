import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportadorComponent } from './aportador.component';

describe('AportadorComponent', () => {
  let component: AportadorComponent;
  let fixture: ComponentFixture<AportadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AportadorComponent]
    });
    fixture = TestBed.createComponent(AportadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaraporteComponent } from './editaraporte.component';

describe('EditaraporteComponent', () => {
  let component: EditaraporteComponent;
  let fixture: ComponentFixture<EditaraporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditaraporteComponent]
    });
    fixture = TestBed.createComponent(EditaraporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

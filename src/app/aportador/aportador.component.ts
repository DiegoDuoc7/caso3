import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aportador',
  templateUrl: './aportador.component.html',
  styleUrls: ['./aportador.component.css']
})
export class AportadorComponent {
  aportadorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.aportadorForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registrarAportador() {
    if (this.aportadorForm.valid) {
      const aportadorData = this.aportadorForm.value;
      localStorage.setItem('aportador', JSON.stringify(aportadorData));
      // Redirigir al usuario o mostrar mensaje de éxito
    }
  }
}

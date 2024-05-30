import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AportadorService } from 'src/app/Services/aportador';

@Component({
  selector: 'app-aportador',
  templateUrl: './aportador.component.html',
  styleUrls: ['./aportador.component.css']
})
export class AportadorComponent {
  aportadorForm: FormGroup;

  constructor(private fb: FormBuilder, private aportadorService: AportadorService) {
    this.aportadorForm = this.fb.group({
      nombre: ['', Validators.required],
      rut: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      monto: ['', Validators.required],
      tarjeta: ['', Validators.required],
      fechaInicio: ['', Validators.required]
    });
  }

  registrarAportador() {
    if (this.aportadorForm.valid) {
      const aportadorData = this.aportadorForm.value;
      this.aportadorService.crearAportador(aportadorData).subscribe(response => {
        console.log('Aportador registrado con éxito', response);
        // Redirigir al usuario o mostrar mensaje de éxito
      }, error => {
        console.error('Error al registrar el aportador', error);
        // Manejar el error
      });
    }
  }
}
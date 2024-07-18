import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AportadorService } from 'src/app/Services/aportador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aportador',
  templateUrl: './aportador.component.html',
  styleUrls: ['./aportador.component.css']
})
export class AportadorComponent implements OnInit {
  aportadorForm: FormGroup;

  constructor(private fb: FormBuilder, private aportadorService: AportadorService, private router: Router) {}

  ngOnInit(): void {
    this.aportadorForm = this.fb.group({
      nombre: ['', [Validators.required]],
      rut: ['', [Validators.required, Validators.pattern('^[0-9]+-[0-9kK]{1}$')]], // Example pattern for RUT
      email: ['', [Validators.required, Validators.email]],
      monto: ['', [Validators.required, Validators.min(1)]],
      tarjeta: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]], // Example pattern for card number
      fechaInicio: ['', [Validators.required]]
    });
  }

  registrarAportador() {
    if (this.aportadorForm.valid) {
      const aportadorData = this.aportadorForm.value;
      this.aportadorService.crearAportador(aportadorData).subscribe(response => {
        console.log('Aportador registrado con éxito', response);
        alert('Aportador registrado con éxito');
        this.aportadorForm.reset();
        this.router.navigate(['/aportar']);
        // Redirigir al usuario o mostrar mensaje de éxito
      }, error => {
        console.error('Error al registrar el aportador', error);
        // Manejar el error
      });
    }
  }
}
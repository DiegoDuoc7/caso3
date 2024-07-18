import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AportadorService } from 'src/app/Services/aportador';
import { AporteService } from 'src/app/Services/aporte';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  aportadores: any[] = [];
  formulario: FormGroup;
  today: string;

  constructor(
    private fb: FormBuilder,
    private aportadorService: AportadorService, 
    private aporteService: AporteService,
    private router: Router
  ) {
    this.today = new Date().toISOString().split('T')[0]; // Set the value of today
    this.formulario = this.fb.group({
      fecha: [this.today, Validators.required],
      monto: ['', [Validators.required, this.positiveMontoValidator, Validators.max(100000000)]],
      aportadorId: ['', Validators.required] // Added aportadorId control
    });
  }

  ngOnInit(): void {
    this.obtenerAportadores();
  }

  obtenerAportadores(): void {
    this.aportadorService.obtenerAportadores().subscribe(
      (data) => {
        this.aportadores = data;
      },
      (error) => {
        console.error('Error al obtener los aportadores', error);
      }
    );
  }

  crearAporte(): void {
    if (this.formulario.valid) {
      this.aporteService.crearAporte(this.formulario.value).subscribe(
        (response) => {
          console.log('Aporte creado exitosamente', response);
          alert('¡El aporte se ha realizado con éxito!');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error al crear el aporte', error);
        }
      );
    }
  }

  positiveMontoValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value <= 0) {
      return { 'negativeMonto': true };
    }
    return null;
  }
}
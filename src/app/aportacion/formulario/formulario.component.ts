import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AportadorService } from 'src/app/Services/aportador';
import { AporteService } from 'src/app/Services/aporte';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  aportadores: any[] = [];
  nuevoAporte: any = {};

  constructor(
    private aportadorService: AportadorService, 
    private aporteService: AporteService,
    private router: Router // Inyecta Router
  ) {}
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
    this.aporteService.crearAporte(this.nuevoAporte).subscribe(
      (response) => {
        console.log('Aporte creado exitosamente', response);
        alert('¡El aporte se ha realizado con éxito!');
      },
      (error) => {
        console.error('Error al crear el aporte', error);
      }
    );
this.router.navigate(['/home']);
  }
}


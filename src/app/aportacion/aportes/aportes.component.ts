import { Component, OnInit } from '@angular/core';
import { AporteService } from 'src/app/Services/aporte';
import { AportadorService } from 'src/app/Services/aportador';

@Component({
  selector: 'app-aportes',
  templateUrl: './aportes.component.html',
  styleUrls: ['./aportes.component.css']
})
export class AportesComponent implements OnInit {
  aportes: any[] = [];

  constructor(private aporteService: AporteService, private aportadorService: AportadorService) {}

  ngOnInit(): void {
    this.obtenerAportes();
   
  }

  obtenerAportes(): void {
    this.aporteService.obtenerAportes().subscribe(
      (data) => {
        this.aportes = data;
        console.log(this.aportes);
      
      },
      (error) => {
        console.error('Error al obtener los aportes', error);
      }
    );
  }
  eliminarAporte(id: string): void {
    this.aporteService.eliminarAporte(id).subscribe(() => {
      this.obtenerAportes();
    });
  }
}
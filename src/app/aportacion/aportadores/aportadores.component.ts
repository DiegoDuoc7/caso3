import { Component, OnInit } from '@angular/core';
import { AportadorService } from 'src/app/Services/aportador';

@Component({
  selector: 'app-aportadores',
  templateUrl: './aportadores.component.html',
  styleUrls: ['./aportadores.component.css']
})
export class AportadoresComponent implements OnInit {
  aportadores: any[] = [];

  constructor(private aportadorService: AportadorService) {}

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
}
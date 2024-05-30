import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aportar',
  templateUrl: './aportar.component.html',
  styleUrls: ['./aportar.component.css']
})
export class AportarComponent {

  constructor(private router: Router) {}

  crearAporte() {
    this.router.navigate(['/formulario']);
  }

  crearAporteConDatosUsados() {
    this.router.navigate(['/formulario']);
  }
}

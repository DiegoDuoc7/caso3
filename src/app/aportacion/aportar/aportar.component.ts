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

  crearAportadorNuevo() {
    this.router.navigate(['/crear-aportador']);
  }

  verAportes() {
    this.router.navigate(['/ver-aportes']);
  }

  verAportadores() {
    this.router.navigate(['/ver-aportadores']);
  }

  cambiarImagen(direccion: string) {
    const carousel = document.querySelector('#carouselExampleIndicators');
    if (carousel) {
      if (direccion === 'prev') {
        (carousel as any).carousel('prev');
      } else if (direccion === 'next') {
        (carousel as any).carousel('next');
      }
      console.log(`Cambiando imagen en dirección: ${direccion}`);
    } else {
      console.error('No se encontró el carrusel');
    }
  }
}

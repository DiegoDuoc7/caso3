import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  onSubmit() {
    console.log('Nombre:', this.nombre);
    console.log('Correo Electrónico:', this.email);
    console.log('Mensaje:', this.mensaje);
  }
}

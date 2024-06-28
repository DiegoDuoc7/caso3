import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AporteService } from 'src/app/Services/aporte';


@Component({
  selector: 'app-editaraporte',
  templateUrl: './editaraporte.component.html',
  styleUrls: ['./editaraporte.component.css']
})
export class EditaraporteComponent implements OnInit {
  aporte: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aporteService: AporteService
  ) {}

  ngOnInit(): void {
    this.aporte = {
      monto: null,
      aportadorId: {
        nombre: ''
      },
      fecha: null
    };
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.aporteService.obtenerAportePorId(id).subscribe((data: any) => {
        this.aporte = data;
      });
    } else {
      // Manejar el caso cuando id es null
      console.error('ID no encontrado');
    }
  }

  onSubmit(): void {
    this.aporteService.actualizarAporte(this.aporte._id, this.aporte).subscribe(() => {
      this.router.navigate(['/ver-aportes']);
    });
  }
}

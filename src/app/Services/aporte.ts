import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AporteService {
  private apiUrl = 'https://power-consulting-backend-iwwm.vercel.app/aportes';

  constructor(private http: HttpClient) {}

  crearAporte(aporte: any): Observable<any> {
    return this.http.post(this.apiUrl, aporte);
  }

  obtenerAportes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerAportePorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  actualizarAporte(id: string, aporte: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, aporte);
  }

  eliminarAporte(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

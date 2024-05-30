import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AportadorService {
  private apiUrl = 'http://localhost:4000/aportadores';

  constructor(private http: HttpClient) {}

  crearAportador(aportador: any): Observable<any> {
    return this.http.post(this.apiUrl, aportador);
  }

  obtenerAportadores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerAportadorPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  actualizarAportador(id: string, aportador: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, aportador);
  }

  eliminarAportador(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = environments.paisesUrl;

  constructor(private http: HttpClient) { }


  //buscarPais
  search( pais: string ):Observable<Pais[]>{
    const url: string = `${this.baseUrl}/name/${pais}`;
    return this.http.get<Pais[]>(url)
  }

  buscarFavoritos(): Observable<Pais[]>{
    const paises = localStorage.getItem('favoritos')
    const url: string = `${this.baseUrl}/alpha?codes=${paises}`;
    return this.http.get<Pais[]>(url)

  }
}

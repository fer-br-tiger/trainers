import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const cudOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private urlBase = environment.url_servicios_base;

  private apiGetAlumnos = this.urlBase + '/alumnos/';
  private apiPostAlumnos = this.urlBase + '/alumnos/';
  private apiDeleteAlumno = this.urlBase + '/alumnos/dni/';

  constructor(public http: HttpClient) { }

  getAlumnos(): Observable<any> {
    return this.http.get(this.apiGetAlumnos);
  }

  postAlumnos(alumno: any): Observable<any> {
    const newSession = Object.assign({}, alumno);
    return this.http.post<any[]>(this.apiPostAlumnos, newSession, cudOptions);
  }

  deleteAlumno(dni: string): Observable<any> {
    return this.http.delete(this.apiDeleteAlumno + dni);
  }
}

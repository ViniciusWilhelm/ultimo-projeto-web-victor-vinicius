import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cliente } from './Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL = '/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL + '/cliente/lista')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(this.apiURL + '/cliente/' + id + '/detalhes', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createCliente(cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiURL + '/cliente', JSON.stringify(cliente), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateCliente(id, cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.apiURL + '/cliente/' + id, JSON.stringify(cliente), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteCliente(id){
    return this.http.delete<Cliente>(this.apiURL + '/cliente/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
     } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Funcionario } from './Funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  apiURL = '/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiURL + '/funcionario/lista')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getFuncionario(id): Observable<Funcionario> {
    return this.http.get<Funcionario>(this.apiURL + '/funcionario/' + id + '/detalhes', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createFuncionario(funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiURL + '/funcionario', JSON.stringify(funcionario), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateFuncionario(id, funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(this.apiURL + '/funcionario/' + id, JSON.stringify(funcionario), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteFuncionario(id){
    return this.http.delete<Funcionario>(this.apiURL + '/funcionario/' + id, this.httpOptions)
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pedido } from './Pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  apiURL = '/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiURL + '/pedido/lista')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getPedido(id): Observable<Pedido> {
    return this.http.get<Pedido>(this.apiURL + '/pedido/' + id + '/detalhes', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createPedido(pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiURL + '/pedido', JSON.stringify(pedido), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updatePedido(id, pedido): Observable<Pedido> {
    return this.http.put<Pedido>(this.apiURL + '/pedido/' + id, JSON.stringify(pedido), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deletePedido(id){
    return this.http.delete<Pedido>(this.apiURL + '/pedido/' + id, this.httpOptions)
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

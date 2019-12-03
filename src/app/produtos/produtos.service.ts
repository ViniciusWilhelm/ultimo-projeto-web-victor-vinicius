import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Produto } from './Produtos';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  
  apiURL = '/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiURL + '/produto/lista')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getProduto(id): Observable<Produto> {
    return this.http.get<Produto>(this.apiURL + '/produto/' + id + '/detalhes', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createProduto(produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiURL + '/produto', JSON.stringify(produto), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateProduto(id, produto): Observable<Produto> {
    return this.http.put<Produto>(this.apiURL + '/produto/' + id, JSON.stringify(produto), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteProduto(id){
    return this.http.delete<Produto>(this.apiURL + '/produto/' + id, this.httpOptions)
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

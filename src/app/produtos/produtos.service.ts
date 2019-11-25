import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Produto } from './Produtos';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  
  apiURL = 'http://localhost:8080';
  produtos: any[] = [];

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiURL + '/product/list')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch product
  getProduct(id): Observable<Produto> {
    return this.http.get<Produto>(this.apiURL + '/product/' + id + '/details')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create product
  createProduct(product): Observable<Number> {
    return this.http.post<Number>(this.apiURL + '/product', JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update product
  updateProduct(id, product): Observable<Produto> {
    return this.http.put<Produto>(this.apiURL + '/products/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete product
  deleteProduct(id){
    return this.http.delete<Produto>(this.apiURL + '/products/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}

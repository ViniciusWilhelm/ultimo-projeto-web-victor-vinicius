import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: any[] = [];

  constructor() { }

  salvar(produto: any) {
    this.produtos.push(produto);
  }

  getProdutos() {
    return this.produtos;
  }

  getProduto(id: string): any {
    return this.produtos.find(produto => produto.id == id);
  }
}

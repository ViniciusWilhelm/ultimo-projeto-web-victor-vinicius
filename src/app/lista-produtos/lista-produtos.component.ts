import { Component, OnInit } from '@angular/core';
import { ProdutosService }  from '../produtos/produtos.service';
import { Produto } from '../produtos/Produtos';
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor(private ProdutosService: ProdutosService) {}

  private produtos : Produto[];

  ngOnInit() {
    this.getProdutos();
  }
  
  getProdutos(): void {
    this.ProdutosService.getProdutos().subscribe(
      produtos => this.produtos = produtos);
  }

}

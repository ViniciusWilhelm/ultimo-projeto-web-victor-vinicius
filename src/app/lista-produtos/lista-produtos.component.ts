import { Component, OnInit } from '@angular/core';
import { ProdutosService }  from '../produtos/produtos.service';
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: any[] = [];
  constructor(private produtosService: ProdutosService) {}


  ngOnInit(): void {
    this.getProdutos();
  }
  
  getProdutos(): void {
    this.produtos = this.produtosService.getProdutos();
  }

}

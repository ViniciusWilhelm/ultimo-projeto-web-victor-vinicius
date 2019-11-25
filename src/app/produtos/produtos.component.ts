import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdutosService } from './produtos.service';
import { Produto } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  //produto: any;
  //produtos: any[] = [];

  private newProduct: Produto;

  private produtos: Produto[];

  constructor(private service: ProdutosService) { }

  ngOnInit() {
    this.newProduct = new Produto();
    this.getProdutos();
  }

  getProdutos(): void {
    //this.ProdutosService.getProdutos().salvar(
    ProdutosService.getProducts().salvar  
    produtos => this.produtos = produtos);
  }

  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      ProdutosService.createProduct(this.newProduct).subscribe(
        id => {
          this.newProduct = new Produto();
          this.getProdutos();
        }
      );
    }
  }

}

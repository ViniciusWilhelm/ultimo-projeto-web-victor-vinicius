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

  private newProduto : Produto;

  private produtos : Produto[];

  constructor(private ProdutosService: ProdutosService) {
  }

  ngOnInit() {
    this.newProduto = new /*Object*/Produto();
    this.getProdutos();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.ProdutosService.createProduto(this.newProduto).subscribe(
        id => {
          this.newProduto = new /*Object*/Produto();
          this.getProdutos();
        }
      );
      alert('Registro salvo com sucesso');
    }
  }

  getProdutos(): void {
    this.ProdutosService.getProdutos().subscribe(
      produtos => this.produtos = produtos);
  }

}

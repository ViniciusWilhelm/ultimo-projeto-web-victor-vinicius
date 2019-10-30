import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: any;
  produtos: any[] = [];

  constructor(private service: ProdutosService) { }

  ngOnInit() {
    this.produto = new Object();
    this.produtos = this.service.getProdutos();
  }

  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      this.produto.id =  
      Math.random().toString(36).substring(2, 15) 
      + Math.random().toString(36).substring(2, 15);
      this.service.salvar(this.produto);
      this.produto = new Object();
      this.produtos = this.service.getProdutos();
      alert('Registro salvo com sucesso');
    }
  }

}

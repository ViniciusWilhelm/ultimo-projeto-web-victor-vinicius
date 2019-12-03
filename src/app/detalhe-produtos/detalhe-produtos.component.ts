import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produtos/Produtos';
import { ProdutosService } from '../produtos/produtos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detalhe-produtos',
  templateUrl: './detalhe-produtos.component.html',
  styleUrls: ['./detalhe-produtos.component.css']
})
export class DetalheProdutosComponent implements OnInit {

  produto: any = new Object();

  constructor(private route: ActivatedRoute,
    private produtosService: ProdutosService) { }


  private id: any;

  ngOnInit(): void {
    this.getProduto();
    this.getId();
  }
  getId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
  }

  getProduto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.produtosService.getProduto(id).subscribe(
      produto => this.produto = produto);
  }

  /*onSubmit(form: NgForm) {
    if (form.valid) {
      this.produtosService.updateProduto();
      alert('Registro alterado com sucesso');
    }
  }*/

  delete() {
    this.produtosService.deleteProduto(this.id);
    alert('Registro deletado com sucesso');
  }


}

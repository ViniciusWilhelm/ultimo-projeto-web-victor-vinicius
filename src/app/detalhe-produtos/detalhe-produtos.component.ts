import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produtos/Produtos';
import { ProdutosService }  from '../produtos/produtos.service';

@Component({
  selector: 'app-detalhe-produtos',
  templateUrl: './detalhe-produtos.component.html',
  styleUrls: ['./detalhe-produtos.component.css']
})
export class DetalheProdutosComponent implements OnInit {


  constructor(private route: ActivatedRoute,
    private produtosService: ProdutosService) {}

  private produto;

  ngOnInit(): void {
    this.getProduto();
  }
  
  getProduto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.produto = this.produtosService.getProduto(id);
  }
  

}

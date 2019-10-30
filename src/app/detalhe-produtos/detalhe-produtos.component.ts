import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProdutosService }  from '../produtos/produtos.service';

@Component({
  selector: 'app-detalhe-produtos',
  templateUrl: './detalhe-produtos.component.html',
  styleUrls: ['./detalhe-produtos.component.css']
})
export class DetalheProdutosComponent implements OnInit {

  produto: any = new Object();
  constructor(private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) {}


  ngOnInit(): void {
    this.getProduto();
  }
  
  getProduto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.produto = this.produtosService.getProduto(id);
  }

}

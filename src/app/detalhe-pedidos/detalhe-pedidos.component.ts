import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PedidosService }  from '../pedidos/pedidos.service';

@Component({
  selector: 'app-detalhe-pedidos',
  templateUrl: './detalhe-pedidos.component.html',
  styleUrls: ['./detalhe-pedidos.component.css']
})
export class DetalhePedidosComponent implements OnInit {

  pedido: any = new Object();
  constructor(private route: ActivatedRoute,
    private pedidosService: PedidosService
  ) {}


  ngOnInit(): void {
    this.getPedido();
  }
  
  getPedido(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pedido = this.pedidosService.getPedido(id);
  }

}

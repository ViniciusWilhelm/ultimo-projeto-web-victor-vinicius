import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PedidosService }  from '../pedidos/pedidos.service';
@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  pedido: any = new Object();
  constructor(private pedidosService: PedidosService) {}

  
  ngOnInit() {

  }
}
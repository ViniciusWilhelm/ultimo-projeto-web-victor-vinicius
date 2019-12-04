import { Component, OnInit } from '@angular/core';
import { PedidosService }  from '../pedidos/pedidos.service';
import { Pedido } from '../pedidos/Pedidos';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  constructor(private pedidosService: PedidosService) {}
  private pedidos : Pedido[];

  ngOnInit() {
    this.getPedidos();
  }
  
  getPedidos(): void {
    this.pedidosService.getPedidos().subscribe(
      pedidos => this.pedidos = pedidos);
  }
}

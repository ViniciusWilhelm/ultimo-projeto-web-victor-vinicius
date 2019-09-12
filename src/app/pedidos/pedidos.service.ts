import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedidos: any[] = [];

  constructor() { }

  salvar(pedido: any) {
    this.pedidos.push(pedido);
  }

  getPedidos() {
    return this.pedidos;
  }

  getPedido(id: string): any {
    return this.pedidos.find(pedido => pedido.id == id);
  }
}

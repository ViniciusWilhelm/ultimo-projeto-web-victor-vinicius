import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PedidosService } from './pedidos.service';
import { Pedido } from './Pedidos';

@Component({
  selector: 'app-curso',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  private newPedido : Pedido;

  private pedidos : Pedido[];

  constructor(private PedidosService: PedidosService) {
  }

  ngOnInit() {
    this.newPedido = new Pedido();
    this.getPedidos();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.PedidosService.createPedido(this.newPedido).subscribe(
        id => {
          this.newPedido = new Pedido();
          this.getPedidos();
        }
      );
      alert('Registro salvo com sucesso');
    }
  }

  getPedidos(): void {
    this.PedidosService.getPedidos().subscribe(
      pedidos => this.pedidos = pedidos);
  }

}

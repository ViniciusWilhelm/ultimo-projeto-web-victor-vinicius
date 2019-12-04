import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../pedidos/Pedidos';
import { PedidosService } from '../pedidos/pedidos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detalhe-pedidos',
  templateUrl: './detalhe-pedidos.component.html',
  styleUrls: ['./detalhe-pedidos.component.css']
})
export class DetalhePedidosComponent implements OnInit {

  pedido: any = new Object();

  constructor(private route: ActivatedRoute,
    private pedidosService: PedidosService) { }


  private id: any;

  ngOnInit(): void {
    this.getPedido();
    this.getId();
  }
  getId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
  }

  getPedido(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pedidosService.getPedido(id).subscribe(
      pedido => this.pedido = pedido);
  }

  /*onSubmit(form: NgForm) {
    if (form.valid) {
      this.produtosService.updateProduto();
      alert('Registro alterado com sucesso');
    }
  }*/

  delete() {
    this.pedidosService.deletePedido(this.id);
    alert('Registro deletado com sucesso');
  }


}
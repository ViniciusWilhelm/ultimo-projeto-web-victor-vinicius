import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PedidosService } from './pedidos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedido: any;
  pedidos: any[] = [];

  constructor(private service: PedidosService) { }

  ngOnInit() {
    this.pedido = new Object();
    this.pedidos = this.service.getPedidos();
  }

  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      this.pedido.id =  
      Math.random().toString(36).substring(2, 15) 
      + Math.random().toString(36).substring(2, 15);
      this.service.salvar(this.pedido);
      this.pedido = new Object();
      this.pedidos = this.service.getPedidos();
      alert('Registro salvo com sucesso');
    }
  }

}

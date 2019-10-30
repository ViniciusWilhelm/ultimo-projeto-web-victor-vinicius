import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente: any;
  clientes: any[] = [];

  constructor(private service: ClientesService) { }

  ngOnInit() {
    this.cliente = new Object();
    this.clientes = this.service.getClientes();
  }

  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      this.cliente.id =  
      Math.random().toString(36).substring(2, 15) 
      + Math.random().toString(36).substring(2, 15);
      this.service.salvar(this.cliente);
      this.cliente = new Object();
      this.clientes = this.service.getClientes();
      alert('Registro salvo com sucesso');
    }
  }
}

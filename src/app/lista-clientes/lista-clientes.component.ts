import { Component, OnInit } from '@angular/core';
import { ClientesService }  from '../clientes/clientes.service';
import { Cliente } from '../clientes/Clientes';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(private clientesService: ClientesService) {}


  private clientes : Cliente[];

  ngOnInit() {
    this.getClientes();
  }
  
  getClientes(): void {
    this.clientesService.getClientes().subscribe(
      clientes => this.clientes = clientes);
  }
}


import { Component, OnInit } from '@angular/core';
import { ClientesService }  from '../clientes/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: any[] = [];
  constructor(private clientesService: ClientesService) {}


  ngOnInit(): void {
    this.getClientes();
  }
  
  getClientes(): void {
    this.clientes = this.clientesService.getClientes();
  }

}

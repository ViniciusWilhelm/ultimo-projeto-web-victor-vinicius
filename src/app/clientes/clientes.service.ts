import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: any[] = [];

  constructor() { }

  salvar(cliente: any) {
    this.clientes.push(cliente);
  }

  getClientes() {
    return this.clientes;
  }

  getCliente(id: string): any {
    return this.clientes.find(cliente => cliente.id == id);
  }
}

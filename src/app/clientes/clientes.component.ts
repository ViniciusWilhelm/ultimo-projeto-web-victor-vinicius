import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from './clientes.service';
import { Cliente } from './Clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  private newCliente : Cliente;

  private clientes : Cliente[];

  constructor(private ClientesService: ClientesService) {
  }

  ngOnInit() {
    this.newCliente = new Cliente();
    this.getClientes();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.ClientesService.createCliente(this.newCliente).subscribe(
        id => {
          this.newCliente = new Cliente();
          this.getClientes();
        }
      );
      alert('Registro salvo com sucesso');
    }
  }

  getClientes(): void {
    this.ClientesService.getClientes().subscribe(
      clientes => this.clientes = clientes);
  }
}

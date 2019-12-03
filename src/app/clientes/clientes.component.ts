import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from './funcionarios.service';
import { Cliente } from './Clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  private newFuncionario : Funcionario;

  private funcionarios : Funcionario[];

  constructor(private FuncionariosService: FuncionariosService) {
  }

  ngOnInit() {
    this.newFuncionario = new Funcionario();
    this.getFuncionarios();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.FuncionariosService.createFuncionario(this.newFuncionario).subscribe(
        id => {
          this.newFuncionario = new Funcionario();
          this.getFuncionarios();
        }
      );
      alert('Registro salvo com sucesso');
    }
  }

  getFuncionarios(): void {
    this.FuncionariosService.getFuncionarios().subscribe(
      funcionarios => this.funcionarios = funcionarios);
  }
}

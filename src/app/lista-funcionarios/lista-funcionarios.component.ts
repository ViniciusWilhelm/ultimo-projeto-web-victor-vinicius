import { Component, OnInit } from '@angular/core';
import { FuncionariosService }  from '../funcionarios/funcionarios.service';
import { Funcionario } from '../funcionarios/Funcionarios';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit {


  constructor(private funcionariosService: FuncionariosService) {}
  private funcionarios : Funcionario[];

  ngOnInit() {
    this.getFuncionarios();
  }
  
  getFuncionarios(): void {
    this.funcionariosService.getFuncionarios().subscribe(
      funcionarios => this.funcionarios = funcionarios);
  }

}

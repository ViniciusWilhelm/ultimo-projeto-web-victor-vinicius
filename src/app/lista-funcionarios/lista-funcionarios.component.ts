import { Component, OnInit } from '@angular/core';
import { FuncionariosService }  from '../funcionarios/funcionarios.service';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit {

  funcionarios: any[] = [];
  constructor(private funcionariosService: FuncionariosService) {}


  ngOnInit(): void {
    this.getFuncionarios();
  }
  
  getFuncionarios(): void {
    this.funcionarios = this.funcionariosService.getFuncionarios();
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FuncionariosService } from './funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionario: any;
  funcionarios: any[] = [];

  constructor(private service: FuncionariosService) { }

  ngOnInit() {
    this.funcionario = new Object();
    this.funcionarios = this.service.getFuncionarios();
  }

  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      this.funcionario.id =  
      Math.random().toString(36).substring(2, 15) 
      + Math.random().toString(36).substring(2, 15);
      this.service.salvar(this.funcionario);
      this.funcionario = new Object();
      this.funcionarios = this.service.getFuncionarios();
      alert('Registro salvo com sucesso');
    }
  }
}

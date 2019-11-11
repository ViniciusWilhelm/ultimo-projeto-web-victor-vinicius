import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  funcionarios: any[] = [];

  constructor() { }

  salvar(funcionario: any) {
    this.funcionarios.push(funcionario);
  }

  getFuncionarios() {
    return this.funcionarios;
  }

  getFuncionario(id: string): any {
    return this.funcionarios.find(funcionario => funcionario.id == id);
  }
}

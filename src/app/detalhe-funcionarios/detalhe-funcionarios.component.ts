import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from '../funcionarios/Funcionarios';
import { FuncionariosService } from '../funcionarios/funcionarios.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-detalhe-funcionarios',
  templateUrl: './detalhe-funcionarios.component.html',
  styleUrls: ['./detalhe-funcionarios.component.css']
})
export class DetalheFuncionariosComponent implements OnInit {

  funcionario: any = new Object();

  constructor(private route: ActivatedRoute,
    private funcionariosService: FuncionariosService) { }


  private id: any;

  ngOnInit(): void {
    this.getFuncionario();
    this.getId();
  }
  getId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
  }

  getFuncionario(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.funcionariosService.getFuncionario(id).subscribe(
      funcionario => this.funcionario = funcionario);
  }

  /*onSubmit(form: NgForm) {
    if (form.valid) {
      this.produtosService.updateProduto();
      alert('Registro alterado com sucesso');
    }
  }*/

  delete() {
    this.funcionariosService.deleteFuncionario(this.id);
    alert('Registro deletado com sucesso');
  }


}

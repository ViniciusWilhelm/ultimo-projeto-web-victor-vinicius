import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionariosService }  from '../funcionarios/funcionarios.service';


@Component({
  selector: 'app-detalhe-funcionarios',
  templateUrl: './detalhe-funcionarios.component.html',
  styleUrls: ['./detalhe-funcionarios.component.css']
})
export class DetalheFuncionariosComponent implements OnInit {

  funcionario: any = new Object();
  constructor(private route: ActivatedRoute,
    private funcionariosService: FuncionariosService
  ) {}


  ngOnInit(): void {
    this.getFuncionario();
  }
  
  getFuncionario(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.funcionario = this.funcionariosService.getFuncionario(id);
  }
}

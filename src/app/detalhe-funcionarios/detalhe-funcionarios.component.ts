import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService }  from '../clientes/clientes.service';


@Component({
  selector: 'app-detalhe-funcionarios',
  templateUrl: './detalhe-funcionarios.component.html',
  styleUrls: ['./detalhe-funcionarios.component.css']
})
export class DetalheFuncionariosComponent implements OnInit {

  funcionario: any = new Object();
  constructor(private route: ActivatedRoute,
    private clientesService: ClientesService
  ) {}


  ngOnInit(): void {
    this.getCliente();
  }
  
  getCliente(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cliente = this.clientesService.getCliente(id);
  }
}

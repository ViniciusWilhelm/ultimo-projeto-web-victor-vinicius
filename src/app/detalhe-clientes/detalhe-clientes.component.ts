import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientesService }  from '../clientes/clientes.service';

@Component({
  selector: 'app-detalhe-clientes',
  templateUrl: './detalhe-clientes.component.html',
  styleUrls: ['./detalhe-clientes.component.css']
})
export class DetalheClientesComponent implements OnInit {

  cliente: any = new Object();
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

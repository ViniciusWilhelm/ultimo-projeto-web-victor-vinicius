import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { DetalhePedidosComponent } from './detalhe-pedidos/detalhe-pedidos.component';
import { PedidosService } from './pedidos/pedidos.service';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { DetalheProdutosComponent } from './detalhe-produtos/detalhe-produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { DetalheClientesComponent } from './detalhe-clientes/detalhe-clientes.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { DetalheFuncionariosComponent } from './detalhe-funcionarios/detalhe-funcionarios.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PedidosComponent,
    ListaPedidosComponent,
    DetalhePedidosComponent,
    ProdutosComponent,
    ListaProdutosComponent,
    DetalheProdutosComponent,
    ClientesComponent,
    ListaClientesComponent,
    DetalheClientesComponent,
    FuncionariosComponent,
    DetalheFuncionariosComponent,
    ListaFuncionariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

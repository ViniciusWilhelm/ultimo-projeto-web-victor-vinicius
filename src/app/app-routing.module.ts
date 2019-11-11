import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { DetalhePedidosComponent } from './detalhe-pedidos/detalhe-pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { DetalheProdutosComponent } from './detalhe-produtos/detalhe-produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { DetalheClientesComponent } from './detalhe-clientes/detalhe-clientes.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';
import { DetalheFuncionariosComponent } from './detalhe-funcionarios/detalhe-funcionarios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'pedidos', component: ListaPedidosComponent },
  { path: 'cadastrarpedidos', component: PedidosComponent },
  { path: 'detalhepedidos/:id', component: DetalhePedidosComponent },

  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'cadastrarprodutos', component: ProdutosComponent },
  { path: 'detalheprodutos/:id', component: DetalheProdutosComponent },

  { path: 'clientes', component: ListaClientesComponent },
  { path: 'cadastrarclientes', component: ClientesComponent },
  { path: 'detalheclientes/:id', component: DetalheClientesComponent },

  { path: 'funcionarios', component: ListaFuncionariosComponent },
  { path: 'cadastrarfuncionarios', component: FuncionariosComponent },
  { path: 'detalhefuncionarios/:id', component: DetalheFuncionariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

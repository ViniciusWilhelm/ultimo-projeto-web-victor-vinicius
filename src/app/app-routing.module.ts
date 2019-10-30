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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'pedidos', component: ListaPedidosComponent },
  { path: 'cadastrarpedidos', component: PedidosComponent },
  { path: 'detalhepedidos/:id', component: DetalhePedidosComponent },

  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'cadastrarprodutos', component: ProdutosComponent },
  { path: 'detalheproduto/:id', component: DetalheProdutosComponent },

  { path: 'clientes', component: ListaClientesComponent },
  { path: 'cadastrarclientes', component: ClientesComponent },
  { path: 'detalhecliente/:id', component: DetalheClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

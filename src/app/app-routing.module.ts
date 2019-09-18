import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { DetalhePedidosComponent } from './detalhe-pedidos/detalhe-pedidos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'pedidos', component: ListaPedidosComponent },
  { path: 'cadastrarpedidos', component: PedidosComponent },
  { path: 'detalhepedidos/:id', component: DetalhePedidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

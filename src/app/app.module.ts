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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PedidosComponent,
    ListaPedidosComponent,
    DetalhePedidosComponent,
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
